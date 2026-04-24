import { IsUUID } from 'class-validator';

export class GetExperienciaLaboralCompletaDto {
  @IsUUID()
  experiencia_laboral_id: string;
}
