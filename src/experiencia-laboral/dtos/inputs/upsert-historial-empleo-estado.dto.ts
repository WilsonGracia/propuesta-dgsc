import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class UpsertHistorialEmpleoEstadoDto {
  @IsOptional()
  @IsUUID()
  historial_empleo_estado_id?: string | null;

  @IsOptional()
  @IsBoolean()
  empleo?: boolean;

  @IsOptional()
  @IsUUID()
  nombramiento_empleo_estado_id?: string | null;

  @IsOptional()
  @IsUUID()
  institucion_gubernamental_id?: string | null;
}
