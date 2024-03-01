import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  async sendEmail(formData: any): Promise<void> {
    // Configure Nodemailer with your email service provider's credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mpanoc6@gmail.com',
        pass: 'iacedfdbizeeejsd',
      },
    });

    // Email content
    const mailOptions = {
      from: 'mpanoc6@gmail.com',
      to: 'mpanoc6@gmail.com', // Replace with the recipient's email address
      subject: 'Form Submission',
      html: `
        <h2>Form Data:</h2>
        <pre>${JSON.stringify(formData, null, 2)}</pre>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  }
}
