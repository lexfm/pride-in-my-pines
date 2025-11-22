import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { validateFormSubmission, getClientIp, recordSubmission } from '../../api/lib/antiSpam';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message, website, recaptchaToken, timeSpent } = req.body;

  // Validate required fields first
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Run comprehensive anti-spam validation
  const validation = await validateFormSubmission(req, {
    website,
    timeSpent,
    recaptchaToken,
    fieldsToValidate: { name, message }
  });

  if (!validation.valid) {
    return res.status(validation.status || 400).json({ message: validation.message });
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
    const clientIp = getClientIp(req);
    if (validation.recentSubmissions) {
      recordSubmission(clientIp, validation.recentSubmissions);
    }

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
} 