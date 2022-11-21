import { PrismaService } from './../../database/prisma.service';
import { CreateCustomerDto } from './dto/create.customer.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update.customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll() {
    return this.prismaService.customer.findMany({
      select: {
        id: true,
        name: true,
        phone: true,
        road: true,
        district: true,
        email: true,
      },
      where: {
        deletedAt: null,
      },
    });
  }

  async findOneById(id: number) {
    try {
      return await this.prismaService.customer.findFirstOrThrow({
        select: {
          id: true,
          name: true,
          phone: true,
          road: true,
          district: true,
          email: true,
        },
        where: {
          id: id,
          deletedAt: null,
        },
      });
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async createNew(data: CreateCustomerDto) {
    try {
      const result = await this.prismaService.customer.create({
        data: {
          ...data,
        },
      });
      return result;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async updateOneById(id: number, data: UpdateCustomerDto) {
    return await this.prismaService.customer.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async deleteById(id: number) {
    const fromDb = await this.findOneById(id);
    if (!fromDb) {
      throw new BadRequestException({ error: `not exists` });
    }
    await this.prismaService.customer.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
