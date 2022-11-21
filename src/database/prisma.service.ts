import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { NestApplication } from '@nestjs/core';
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: NestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
