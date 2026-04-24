import { IsNotEmpty, IsString } from 'class-validator';

export class GetCarrerasPorInstitucionDto {
  @IsNotEmpty()
  @IsString()
  institucion_academica_id!: string;
}
