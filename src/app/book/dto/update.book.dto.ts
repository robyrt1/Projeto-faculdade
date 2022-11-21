import { IsNotEmpty, MaxLength } from 'class-validator';
export class UpdateBookDto {
  @IsNotEmpty({ message: 'Prencha o titulo' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  title: string;
  @IsNotEmpty({ message: 'Prencha o nome' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  author: string;
  @IsNotEmpty({ message: 'Prencha o nome' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  price: number;
  @IsNotEmpty({ message: 'Prencha o nome' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  publishId: number;
  @IsNotEmpty({ message: 'Prencha o nome' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  genreId: number;
}
