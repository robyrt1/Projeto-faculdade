import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'Prencha o nome' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  name: string;

  @IsNotEmpty({ message: 'Prencha o Phone' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  phone: string;

  @IsNotEmpty({ message: 'Prencha o rua' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  road: string;

  @IsNotEmpty({ message: 'Prencha o bairro' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  district: string;

  @IsEmail(undefined, { message: 'informe um email válido' })
  @IsNotEmpty({ message: 'Prencha o email' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  email: string;

  @IsNotEmpty({ message: 'Prencha o password' })
  @MaxLength(100, { message: 'Tamanho maximo é de 100' })
  password: string;
}
