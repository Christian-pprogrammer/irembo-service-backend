import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email/email.service';

@Controller()
export class AppController {
  constructor(private readonly emailService: EmailService) {}

  @Post('/submit-form')
  async submitForm(@Body() formData: any): Promise<{ message: string }> {
    try {
      // Call the function to send an email
      await this.emailService.sendEmail(formData);

      // Respond to the client
      return { message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Error:', error.message);
      throw new Error('Internal Server Error');
    }
  }
}
