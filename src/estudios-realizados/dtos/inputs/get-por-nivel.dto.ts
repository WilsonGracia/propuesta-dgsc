import { IsNotEmpty, IsString } from 'class-validator';

export class GetPorNivelDto {
  @IsNotEmpty()
  @IsString()
  nivel_academico_id!: string;
}
