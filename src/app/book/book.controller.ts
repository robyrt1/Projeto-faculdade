import { CreateBookDto } from './dto/create.book.dto';
import { UpdateBookDto } from './dto/update.book.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get()
  async fundAll() {
    return this.bookService.findAll();
  }

  @Post()
  async createNew(@Body() body: CreateBookDto) {
    return this.bookService.createNew(body);
  }

  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.bookService.findOneById(id);
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() body: UpdateBookDto) {
    return this.bookService.updateOneById(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: number) {
    return this.bookService.deleteById(id);
  }
}
