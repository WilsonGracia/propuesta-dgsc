import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpsertEstudioDto {
  @IsOptional()
  @IsString()
  estudio_id?: string | null;

  @IsNotEmpty()
  @MaxLength(80)
  nombre: string;

  @IsNotEmpty()
  @IsDateString()
  fecha_obtencion: string;

  @IsNotEmpty()
  @IsString()
  carrera_id: string;

  @IsOptional()
  @IsString()
  tipo_documento_id?: string | null;

  @IsNotEmpty()
  @IsString()
  documento_id: string;

  @IsOptional()
  @IsString()
  grado_academico_id?: string | null;

  @IsOptional()
  @IsString()
  registro_id?: string | null;

  @IsOptional()
  @MaxLength(10)
  tomo?: string | null;

  @IsOptional()
  @MaxLength(10)
  folio?: string | null;

  @IsOptional()
  @MaxLength(10)
  asiento?: string | null;

  @IsOptional()
  @IsBoolean()
  registro_publico?: boolean | null;
}
