import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        let htmlContent = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; ">
        <h2 style="background: #000; color: #fff; padding: 20px; text-transform: uppercase;">New $400 Website Offer Client</h2>
        <div style="padding: 20px; border: 1px solid #eaeaea;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <hr />
            <p><strong>Website Type:</strong> ${data.websiteType}</p>
            <p><strong>Major Sections:</strong> ${data.sections}</p>
            <p><strong>Target Domain:</strong> ${data.domain}</p>
            <p><strong>Reference Links/Documents:</strong> ${data.referenceLink || 'None provided'}</p>
        </div>
      </div>
    `;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER || 'ghayas110@gmail.com',
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        const mailOptions = {
            from: '"Genikode Offer Form" <ghayas110@gmail.com>',
            to: 'ghayas110@gmail.com',
            subject: `New $400 Offer Lead: ${data.name}`,
            html: htmlContent,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Offer Schedule Email sent: %s", info.messageId);

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Failed to send offer schedule email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
    }
}
