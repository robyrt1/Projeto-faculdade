import { UpdatePurchaseDto } from './dto/update.purchase.dto';
import { CreatePurchaseDto } from './dto/create.purchase.dto';
import { PurchaseService } from './purchase.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}
  @Get()
  async fundAll() {
    return this.purchaseService.findAll();
  }

  @Post()
  async createNew(@Body() body: CreatePurchaseDto) {
    return this.purchaseService.createNew(body);
  }

  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.purchaseService.findOneById(id);
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() body: UpdatePurchaseDto) {
    return this.purchaseService.updateOneById(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: number) {
    return this.purchaseService.deleteById(id);
  }
}
