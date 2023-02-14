import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

const prisma = new PrismaClient();

@Injectable()
export class EventsService {
  async create(createEventDto: CreateEventDto) {
    return await prisma.event.create({
      data: {
        title: createEventDto.title,
        capacity: createEventDto.capacity,
        company_id: createEventDto.company_id,
        cover_url: createEventDto.cover_url,
        description: createEventDto.description,
        price: createEventDto.price,
        skill_level: createEventDto.skill_level,
        end_time: createEventDto.end_time,
        start_time: createEventDto.start_time,
        type: createEventDto.cover_url,
        trainer_id: createEventDto.trainer_id,
      },
    });
  }

  async findAll() {
    return await prisma.event.findMany();
  }

  async findOne(id: number) {
    return await prisma.event.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    console.log(id, JSON.stringify(updateEventDto), updateEventDto.title);
    if (!updateEventDto) {
      throw new HttpException('No data provided.', HttpStatus.BAD_REQUEST);
    }
    try {
      return await prisma.event.update({
        where: {
          id: id,
        },
        data: {
          capacity: updateEventDto.capacity,
          title: updateEventDto.title,
          company_id: updateEventDto.company_id,
          cover_url: updateEventDto.cover_url,
          description: updateEventDto.description,
          price: updateEventDto.price,
          skill_level: updateEventDto.skill_level,
          end_time: updateEventDto.end_time,
          start_time: updateEventDto.start_time,
          type: updateEventDto.cover_url,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async remove(id: number) {
    return await prisma.event.delete({
      where: {
        id,
      },
    });
  }
}
