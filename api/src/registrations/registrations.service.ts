import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

const prisma = new PrismaClient();

@Injectable()
export class RegistrationsService {
  async create(createEventDto: CreateRegistrationDto) {
    return await prisma.registration.create({
      data: {
        event_id: createEventDto.event_id,
        user_id: createEventDto.user_id,
        userId: createEventDto.userId,
      },
    });
  }

  async findAll() {
    return await prisma.registration.findMany();
  }

  async findOne(id: number) {
    return await prisma.registration.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return await prisma.registration.update({
      where: {
        id: updateRegistrationDto.id,
      },
      data: {
        user_id: updateRegistrationDto.user_id,
        event_id: updateRegistrationDto.user_id,
      },
    });
  }

  async remove(id: number) {
    return await prisma.registration.delete({
      where: {
        id,
      },
    });
  }
}
