import { UpdatePurchaseDto } from './dto/update.purchase.dto';
import { CreatePurchaseDto } from './dto/create.purchase.dto';
import { PrismaService } from './../../database/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class PurchaseService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.purchase.findMany({
      select: {
        customerId: true,
        bookId: true,
        quantity: true,
      },
      where: {
        deletedAt: null,
      },
    });
  }

  async findOneById(id: number) {
    try {
      return await this.prismaService.purchase.findFirstOrThrow({
        select: {
          customerId: true,
          bookId: true,
          quantity: true,
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

  async createNew(data: CreatePurchaseDto) {
    try {
      const result = await this.prismaService.purchase.create({
        data: { ...data },
      });
      return result;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async updateOneById(id: number, data: UpdatePurchaseDto) {
    return await this.prismaService.purchase.update({
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
    await this.prismaService.purchase.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
