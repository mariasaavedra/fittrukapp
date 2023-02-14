import { Controller, Get } from '@nestjs/common';
import { SendEmailService } from './send-email.service';

@Controller('send-email')
export class SendEmailController {
  constructor(private readonly sendEmailService: SendEmailService) {}
  @Get()
  sendEmail() {
    // @TODO - Add parameter for either text or tempalte.
    return this.sendEmailService.sendEmail();
  }
}
