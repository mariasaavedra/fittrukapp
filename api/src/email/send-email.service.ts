import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class SendEmailService {
  sendEmail() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'maria@advadigitalsolutions.com',
      from: 'maria@advadigitalsolutions.com',
      subject: 'Hello world',
      text: 'Hello plain world!!!!',
      html: '<p>Hello HTML world!!!!</p>',
    };
    sgMail.send(msg);
  }
}
