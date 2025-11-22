import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { validateFormSubmission, getClientIp, recordSubmission } from '../../api/lib/antiSpam';
import { getCommitteeEmails, getCommitteeCCEmails, getSenderEmail } from '../../api/lib/emailConfig';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, dob, phone, email, address, positions, website, recaptchaToken, timeSpent } = req.body;

  // Validate required fields first
  if (!name || !dob || !phone || !email || !address || !positions) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Run comprehensive anti-spam validation
  const validation = await validateFormSubmission(req, {
    website,
    timeSpent,
    recaptchaToken,
    fieldsToValidate: { name, address }
  });

  if (!validation.valid) {
    return res.status(validation.status || 400).json({ message: validation.message });
  }

  // Organizer Message - Plain Text and HTML
  const organizerText = `
New Volunteer Signup Received!

Name: ${name}
Date of Birth: ${dob}
Phone Number: ${phone}
Email: ${email}
Address: ${address}
Volunteering Roles: ${Array.isArray(positions) ? positions.join(', ') : positions}
`.trim();

  const organizerHtml = `
  <h2>📥 New Volunteer Signup Received!</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Date of Birth:</strong> ${dob}</p>
  <p><strong>Phone Number:</strong> ${phone}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Address:</strong> ${address}</p>
  <p><strong>Volunteering Roles:</strong> ${Array.isArray(positions) ? positions.join(', ') : positions}</p>
  <hr />
  <p style="color: #4ade80; font-weight: bold;">🌲 Please contact the volunteer ASAP!🏕️</p>
  `;

  // Volunteer Confirmation Message
  const volunteerText = `
Thank you, ${name}!

We received your volunteer signup for Pride in My Pines. Here’s what you selected:

Position(s): ${Array.isArray(positions) ? positions.join(', ') : positions}

Our team will contact you soon.

Sincerely,  
Pride in My Pines Committee 🌲
`.trim();

  const volunteerHtml = `
  <h2>🎉 Thank You, ${name}!</h2>
  <p>We have received your volunteer signup for <strong>Pride in My Pines</strong>.</p>
  <p><strong>Your selected positions:</strong> ${Array.isArray(positions) ? positions.join(', ') : positions}</p>
  <p>Our team will review your submission and reach out to you soon.</p>
  <p style="color: #4ade80; font-weight: bold;">🌲 Sincerely,<br />Pride in My Pines Committee</p>
  `;

  try {
    // Email to Organizer
    await resend.emails.send({
      from: getSenderEmail(),
      to: getCommitteeEmails(),
      cc: getCommitteeCCEmails(),
      subject: 'New Volunteer Signup Submission',
      text: organizerText,
      html: organizerHtml,
    });

    // Confirmation Email to Volunteer
    await resend.emails.send({
      from: getSenderEmail(),
      to: [email],
      subject: 'Thank You for Volunteering with Pride in My Pines!',
      text: volunteerText,
      html: volunteerHtml,
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
