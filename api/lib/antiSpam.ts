import { NextApiRequest } from 'next';

// Rate limiting: Track IP addresses and submission timestamps
const submissionTracker = new Map<string, number[]>();
const MAX_SUBMISSIONS_PER_HOUR = 2;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  submissionTracker.forEach((timestamps, ip) => {
    const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
    if (recentTimestamps.length === 0) {
      submissionTracker.delete(ip);
    } else {
      submissionTracker.set(ip, recentTimestamps);
    }
  });
}, 10 * 60 * 1000);

/**
 * Get client IP address from request
 */
export function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' 
    ? forwarded.split(',')[0] 
    : req.socket.remoteAddress || 'unknown';
  return ip;
}

/**
 * Verify reCAPTCHA token with Google
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY || !token) {
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success && data.score >= 0.5; // Score threshold (0.0 - 1.0, higher is more human-like)
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

/**
 * Check if IP has exceeded rate limit
 */
export function checkRateLimit(clientIp: string): { 
  exceeded: boolean; 
  recentSubmissions: number[] 
} {
  const now = Date.now();
  const submissions = submissionTracker.get(clientIp) || [];
  const recentSubmissions = submissions.filter(t => now - t < RATE_LIMIT_WINDOW);

  return {
    exceeded: recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR,
    recentSubmissions
  };
}

/**
 * Record a successful submission for rate limiting
 */
export function recordSubmission(clientIp: string, recentSubmissions: number[]): void {
  const now = Date.now();
  recentSubmissions.push(now);
  submissionTracker.set(clientIp, recentSubmissions);
}

/**
 * Check for gibberish text (low vowel-to-consonant ratio)
 */
export function isGibberish(text: string): boolean {
  const cleaned = text.replace(/[^a-zA-Z]/g, '');
  if (cleaned.length < 10) return false;
  const vowels = (cleaned.match(/[aeiou]/gi) || []).length;
  const ratio = vowels / cleaned.length;
  return ratio < 0.15; // Less than 15% vowels = likely gibberish
}

/**
 * Check for suspicious patterns in text
 */
export function hasSuspiciousPatterns(text: string): boolean {
  const suspiciousPatterns = [
    /https?:\/\//gi,        // URLs
    /<script/gi,            // Script tags
    /\[url=/gi,             // BBCode links
    /[A-Z]{5,}/g,           // Multiple uppercase letters (like "MqNiGBnYMtPiGyanjNtUdLw")
    /^[a-zA-Z]{15,}$/,      // Very long strings without spaces (gibberish)
    /(.)\1{4,}/,            // Same character repeated 5+ times
  ];

  return suspiciousPatterns.some(pattern => pattern.test(text));
}

/**
 * Validate text field for spam content
 */
export function validateTextField(fieldName: string, text: string): { 
  valid: boolean; 
  reason?: string 
} {
  if (hasSuspiciousPatterns(text)) {
    console.warn(`Suspicious content detected in ${fieldName} field:`, text);
    return { valid: false, reason: 'Suspicious patterns detected' };
  }

  if (isGibberish(text)) {
    console.warn(`Gibberish detected in ${fieldName}:`, text);
    return { valid: false, reason: 'Gibberish text detected' };
  }

  return { valid: true };
}

/**
 * Complete anti-spam validation for form submissions
 */
export async function validateFormSubmission(
  req: NextApiRequest,
  data: {
    website?: string;
    timeSpent?: number;
    recaptchaToken?: string;
    fieldsToValidate: Record<string, string>;
  }
): Promise<{ 
  valid: boolean; 
  status?: number; 
  message?: string;
  recentSubmissions?: number[];
}> {
  const { website, timeSpent, recaptchaToken, fieldsToValidate } = data;

  // Anti-spam check 1: Honeypot field
  if (website) {
    console.warn('Honeypot triggered - potential bot detected');
    // Return success to confuse bots
    return { valid: false, status: 200, message: 'Form submitted successfully' };
  }

  // Anti-spam check 2: Time-based validation
  if (typeof timeSpent === 'number' && timeSpent < 5000) {
    console.warn('Form submitted too quickly - potential bot');
    return { valid: false, status: 400, message: 'Please take your time filling out the form.' };
  }

  // Anti-spam check 3: Rate limiting by IP
  const clientIp = getClientIp(req);
  const { exceeded, recentSubmissions } = checkRateLimit(clientIp);

  if (exceeded) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return { 
      valid: false, 
      status: 429, 
      message: 'Too many submissions. Please try again later.' 
    };
  }

  // Anti-spam check 4: reCAPTCHA verification
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn('⚠️ reCAPTCHA not configured - using strict validation');
  } else if (recaptchaToken) {
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      console.warn('reCAPTCHA verification failed - potential bot');
      return { valid: false, status: 400, message: 'Verification failed. Please try again.' };
    }
  } else {
    console.warn('reCAPTCHA token missing');
    return { valid: false, status: 400, message: 'Security verification required.' };
  }

  // Anti-spam check 5: Content validation
  for (const [fieldName, fieldValue] of Object.entries(fieldsToValidate)) {
    const validation = validateTextField(fieldName, fieldValue);
    if (!validation.valid) {
      return { valid: false, status: 400, message: 'Invalid content detected.' };
    }
  }

  // All checks passed
  return { valid: true, recentSubmissions };
}

