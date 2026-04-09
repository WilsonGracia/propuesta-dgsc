import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateGeneroDto {
  @IsNumber()
  @IsNotEmpty()
  @MaxLength(2, { message: 'probando la longitud de genero' })
  id!: number;

  @IsNotEmpty()
  @IsString()
  nombre!: string;
}
