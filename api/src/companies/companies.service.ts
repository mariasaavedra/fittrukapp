import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

const prisma = new PrismaClient();

@Injectable()
export class CompaniesService {
  async create(createCompanyDto: CreateCompanyDto) {
    return await prisma.company.create({
      data: {
        label: createCompanyDto.label,
      },
    });
  }

  async findAll() {
    return await prisma.company.findMany();
  }

  async findOne(id: number) {
    return await prisma.company.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return await prisma.company.update({
      where: {
        id: updateCompanyDto.id,
      },
      data: {
        label: updateCompanyDto.label,
      },
    });
  }

  async remove(id: number) {
    return await prisma.company.delete({
      where: {
        id,
      },
    });
  }
}
