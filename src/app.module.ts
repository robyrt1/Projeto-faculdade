import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomerModule } from './app/customer/customer.module';
import { BookModule } from './app/book/book.module';
import { PublishModule } from './app/publish/publish.module';
import { GenreModule } from './app/genre/genre.module';
import { PurchaseModule } from './app/purchase/purchase.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomerModule,
    BookModule,
    PublishModule,
    GenreModule,
    PurchaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
