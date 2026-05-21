import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, location, details } = await req.json();

  const { error } = await resend.emails.send({
    from: 'Canyon Markets <noreply@canyon-markets.com>',
    to: 'info@canyon-markets.com',
    replyTo: email,
    subject: `New Market Inquiry — ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Location: ${location}`,
      ``,
      `Project Details:`,
      details,
    ].join('\n'),
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
