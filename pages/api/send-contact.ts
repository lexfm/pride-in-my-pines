import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: Track IP addresses and submission timestamps
const submissionTracker = new Map<string, number[]>();
const MAX_SUBMISSIONS_PER_HOUR = 3;
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

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
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

// Get client IP address
function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' 
    ? forwarded.split(',')[0] 
    : req.socket.remoteAddress || 'unknown';
  return ip;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message, website, recaptchaToken, timeSpent } = req.body;

  // Anti-spam check 1: Honeypot field
  if (website) {
    console.warn('Honeypot triggered - potential bot detected');
    return res.status(200).json({ message: 'Form submitted successfully' }); // Return success to confuse bots
  }

  // Anti-spam check 2: Time-based validation
  if (typeof timeSpent === 'number' && timeSpent < 3000) {
    console.warn('Form submitted too quickly - potential bot');
    return res.status(400).json({ message: 'Please take your time filling out the form.' });
  }

  // Anti-spam check 3: Rate limiting by IP
  const clientIp = getClientIp(req);
  const now = Date.now();
  const submissions = submissionTracker.get(clientIp) || [];
  const recentSubmissions = submissions.filter(t => now - t < RATE_LIMIT_WINDOW);

  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return res.status(429).json({ 
      message: 'Too many submissions. Please try again later.' 
    });
  }

  // Anti-spam check 4: reCAPTCHA verification (if configured)
  if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      console.warn('reCAPTCHA verification failed - potential bot');
      return res.status(400).json({ message: 'Verification failed. Please try again.' });
    }
  }

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Additional validation: Check for suspicious patterns
  const suspiciousPatterns = [
    /https?:\/\//gi, // URLs in name field
    /<script/gi,     // Script tags
    /\[url=/gi,      // BBCode links
  ];

  if (suspiciousPatterns.some(pattern => pattern.test(name))) {
    console.warn('Suspicious content detected in name field');
    return res.status(400).json({ message: 'Invalid content detected.' });
  }

  // Committee Message - Plain Text and HTML
  const committeeText = `
New Contact Form Submission Received!

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
`.trim();

  const committeeHtml = `
  <h2>📥 New Contact Form Submission!</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>Message:</strong></p>
  <p style="white-space: pre-wrap;">${message}</p>
  <hr />
  <p style="color: #4ade80; font-weight: bold;">🌲 Please respond to this inquiry as soon as possible!🏕️</p>
  `;

  // Sender Confirmation Message
  const senderText = `
Thank you, ${name}!

We received your message regarding "${subject}". Here's what you sent:

${message}

Our team will review your message and get back to you soon.

Sincerely,  
Pride in My Pines Committee 🌲
`.trim();

  const senderHtml = `
  <h2>🎉 Thank You, ${name}!</h2>
  <p>We have received your message regarding <strong>${subject}</strong>.</p>
  <p><strong>Your message:</strong></p>
  <p style="white-space: pre-wrap;">${message}</p>
  <p>Our team will review your message and get back to you soon.</p>
  <p style="color: #4ade80; font-weight: bold;">🌲 Sincerely,<br />Pride in My Pines Committee</p>
  `;

  try {
    // Email to Committee
    await resend.emails.send({
      from: 'Pride in My Pines <noreply@updates.prideinmypines.com>',
      to: ['jrsoto@cox.net', 'jeffbrick@gmail.com', 'lex_fimbres@hotmail.com'],
      cc: ['lexfimbres@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      text: committeeText,
      html: committeeHtml,
    });

    // Confirmation Email to Sender
    await resend.emails.send({
      from: 'Pride in My Pines <noreply@updates.prideinmypines.com>',
      to: [email],
      subject: 'Thank You for Contacting Pride in My Pines!',
      text: senderText,
      html: senderHtml,
    });

    // Record successful submission for rate limiting
    recentSubmissions.push(now);
    submissionTracker.set(clientIp, recentSubmissions);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
} 