import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    console.log(`This action adds a new user`);
    return await prisma.user.create({
      data: { ...createUserDto },
    });
  }

  async findAll() {
    console.log(`This action returns all users`);
    return await prisma.user.findMany();
  }

  async findAllTrainers() {
    console.log(`This action returns all trainers`);
    return await prisma.user.findMany({
      where: {
        role_id: 4,
      },
    });
  }

  async findOne(id: number) {
    console.log(`This action returns a #${id} user`);
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    console.log(`This action updates a #${userId} user`);
    const { id, ...data } = updateUserDto;
    return await prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async remove(id: number) {
    console.log(`This action removes a #${id} user`);
    return await prisma.user.delete({
      where: { id },
    });
  }
}
