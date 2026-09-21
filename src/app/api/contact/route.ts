import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Gmail credentials are required to send. Missing them is the #1 cause of
        // "Failed to send message" — surface a clear reason instead of a generic 500.
        if (!process.env.GMAIL_APP_PASSWORD) {
            console.error(
                'GMAIL_APP_PASSWORD is not set. Add it to .env.local (see setup notes) and restart the server.'
            );
            return NextResponse.json(
                {
                    success: false,
                    message:
                        'Email is not configured on the server (missing GMAIL_APP_PASSWORD).',
                },
                { status: 500 }
            );
        }

        // Formatter logic depending on which form was submitted
        const isOldContact = "budget" in data;

        let htmlContent = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; ">
        <h2 style="background: #000; color: #fff; padding: 20px; text-transform: uppercase;">New Project Inquiry</h2>
        <div style="padding: 20px; border: 1px solid #eaeaea;">
    `;

        if (isOldContact) {
            htmlContent += `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong><br/> ${data.message}</p>
      `;
        } else {
            htmlContent += `
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Company Email:</strong> ${data.companyEmail}</p>
        <p><strong>Newsletter Opt-In:</strong> ${data.newsletter ? 'Yes' : 'No'}</p>
        <p><strong>Project Details (Scope, Timeline, Budget):</strong><br/> ${data.projectDetails}</p>
      `;
        }

        htmlContent += `</div></div>`;

        const subjectName = isOldContact ? data.name : `${data.firstName} ${data.lastName}`;

        // Google shows the App Password as "xxxx xxxx xxxx xxxx"; the spaces are for
        // display only. Pasting them into the env var is the #1 cause of a valid key
        // failing auth (535), so strip all whitespace defensively.
        const gmailPass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
        const gmailUser = process.env.GMAIL_USER || 'ghayas110@gmail.com';

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: gmailUser,
                pass: gmailPass // 16-char Google App Password (whitespace stripped)
            }
        });

        const mailOptions = {
            from: '"Genikode Contact Form" <ghayas110@gmail.com>', // Sender address
            to: 'ghayas110@gmail.com', // Receiver address
            subject: `New Lead from Genikode: ${subjectName}`,
            html: htmlContent,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Failed to send email:', error);
        // Surface the real SMTP reason (e.g. 535 "Username and Password not accepted")
        // so misconfiguration is diagnosable instead of a blank "Failed to send".
        const err = error as { code?: string; responseCode?: number; response?: string; message?: string };
        const reason =
            err.response || err.message || 'Unknown mail error';
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to send message.',
                code: err.code || null,
                responseCode: err.responseCode || null,
                reason: String(reason).slice(0, 300),
            },
            { status: 500 }
        );
    }
}
