import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';

export class UpsertExperienciaLaboralDto {
  @IsOptional()
  @IsUUID()
  experiencia_laboral_id?: string | null;

  @IsNotEmpty()
  @MaxLength(100)
  nombre_organizacion: string;

  @IsNotEmpty()
  @MaxLength(100)
  puesto_persona: string;

  @IsNotEmpty()
  @IsDateString()
  fecha_ingreso: string;

  @IsOptional()
  @IsDateString()
  fecha_salida?: string | null;

  @IsNotEmpty()
  @IsBoolean()
  actual: boolean;

  @IsNotEmpty()
  @IsString()
  @MaxLength(2000)
  funcion: string;

  @IsNotEmpty()
  @IsUUID()
  tipo_organizacion_id: string;

  @IsNotEmpty()
  @IsUUID()
  puesto_id: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  total_meses?: number | null;
}
