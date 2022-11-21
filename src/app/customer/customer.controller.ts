import { CreateCustomerDto } from './dto/create.customer.dto';
import { UpdateCustomerDto } from './dto/update.customer.dto';
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
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  async fundAll() {
    return this.customerService.findAll();
  }

  @Post()
  async createNew(@Body() body: CreateCustomerDto) {
    return this.customerService.createNew(body);
  }

  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.customerService.findOneById(id);
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() body: UpdateCustomerDto) {
    return this.customerService.updateOneById(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: number) {
    return this.customerService.deleteById(id);
  }
}
