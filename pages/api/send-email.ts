import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, dob, phone, email, address, positions } = req.body;

  if (!name || !dob || !phone || !email || !address || !positions) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const messageText = `
New Volunteer Signup Received!

Name: ${name}
Date of Birth: ${dob}
Phone Number: ${phone}
Email: ${email}
Address: ${address}
Volunteering Positions: ${Array.isArray(positions) ? positions.join(', ') : positions}
    `.trim();

    const data = await resend.emails.send({
      from: 'Pride in My Pines <noreply@updates.prideinmypines.com>',
      to: ['lexfimbres@gmail.com'],  // Update with committee email if needed
      subject: 'New Volunteer Signup Submission',
      text: messageText,
    });

    console.log('Resend response:', data);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
}
