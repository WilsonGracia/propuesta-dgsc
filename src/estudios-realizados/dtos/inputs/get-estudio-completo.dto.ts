import { IsUUID, IsOptional } from 'class-validator';

export class GetEstudioCompletoDto {
  @IsUUID()
  estudio_id: string;

  @IsUUID()
  tipo_documento_id: string;

  @IsOptional()
  @IsUUID()
  registro_id: string | null;
}
