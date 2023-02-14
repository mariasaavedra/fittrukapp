import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { CompaniesModule } from './companies/companies.module';
import { EmailModule } from './email/send-email.module';
import { TwilioModule } from 'nestjs-twilio';

@Module({
  imports: [
    UsersModule,
    EventsModule,
    RegistrationsModule,
    VehiclesModule,
    CompaniesModule,
    EmailModule,
    TwilioModule.forRoot({
      accountSid: 'AC06e9d9d6bffe66967b016dab18f730e7',
      authToken: '6d09eae0ee2fddf86d26ca96d7d4c336',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
