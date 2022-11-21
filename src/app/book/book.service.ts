import { UpdateBookDto } from './dto/update.book.dto';
import { CreateBookDto } from './dto/create.book.dto';
import { PrismaService } from './../../database/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BookService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.book.findMany({
      select: {
        title: true,
        author: true,
        price: true,
        publishId: true,
        genreId: true,
      },
      where: {
        deletedAt: null,
      },
    });
  }

  async findOneById(id: number) {
    try {
      return await this.prismaService.book.findFirstOrThrow({
        select: {
          title: true,
          author: true,
          price: true,
          publishId: true,
          genreId: true,
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

  async createNew(data: CreateBookDto) {
    try {
      const result = await this.prismaService.book.create({
        data: { ...data },
      });
      return result;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async updateOneById(id: number, data: UpdateBookDto) {
    return await this.prismaService.book.update({
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
    await this.prismaService.book.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
