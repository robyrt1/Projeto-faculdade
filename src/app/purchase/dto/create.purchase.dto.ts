import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreatePurchaseDto {
  @IsNotEmpty({ message: 'Prencha o cliente' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  customerId: number;
  @IsNotEmpty({ message: 'Prencha o book' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  bookId: number;

  @IsNotEmpty({ message: 'Prencha o book' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  quantity: number;
}
