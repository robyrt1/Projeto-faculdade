import { PrismaService } from './../../database/prisma.service';
import { Module } from '@nestjs/common';
import { PublishController } from './publish.controller';
import { PublishService } from './publish.service';

@Module({
  controllers: [PublishController],
  providers: [PublishService, PrismaService]
})
export class PublishModule {}
