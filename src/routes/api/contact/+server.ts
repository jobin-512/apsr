import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();

    const { name, email, service, budget, timeline, goals } = data;

    // 🔥 VALIDATION (server-side safety)
    if (!name || !email || !service || !budget || !timeline || !goals) {
      return new Response(
        JSON.stringify({ error: 'Missing fields' }),
        { status: 400 }
      );
    }

    // 🔥 TRANSPORTER (GMAIL / SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS
      }
    });

    // 🔥 EMAIL CONTENT
    const mailOptions = {
      from: `"Website Lead" <${env.EMAIL_USER}>`,
      to: env.EMAIL_TO, // your receiving email
      subject: `🚀 New Project Inquiry - ${service}`,
      html: `
        <h2>New Project Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Goals:</strong><br/>${goals}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err) {
    console.error(err);

    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500 }
    );
  }
};