import { IsNotEmpty, IsString } from 'class-validator';

export class GetInstitucionesPorNivelDto {
  @IsNotEmpty()
  @IsString()
  nivel_academico_id!: string;
}
