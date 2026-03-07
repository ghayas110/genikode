import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();

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
        <p><strong>Website:</strong> ${data.companyWebsite}</p>
        <p><strong>Newsletter Opt-In:</strong> ${data.newsletter ? 'Yes' : 'No'}</p>
        <p><strong>Project Details (Scope, Timeline, Budget):</strong><br/> ${data.projectDetails}</p>
      `;
        }

        htmlContent += `</div></div>`;

        const subjectName = isOldContact ? data.name : `${data.firstName} ${data.lastName}`;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER || 'ghayas110@gmail.com',
                pass: process.env.GMAIL_APP_PASSWORD // Must be a 16-character Google App Password
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
        return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
    }
}
