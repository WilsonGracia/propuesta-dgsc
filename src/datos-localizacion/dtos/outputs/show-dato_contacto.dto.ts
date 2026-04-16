import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class ShowDatoContactoDto {
  @IsUUID()
  id!: string;

  @IsInt()
  apartado_postal!: number;

  @IsString()
  direccion!: string;

  @IsString()
  numero_principal!: string;

  @IsOptional()
  @IsString()
  numero_opcional!: string;

  @IsOptional()
  @IsString()
  numero_trabajo!: string;

  @IsOptional()
  @IsString()
  numero_ext!: string;

  @IsOptional()
  @IsString()
  fax!: string;

  @IsString()
  correo_principal!: string;

  @IsOptional()
  @IsString()
  correo_opcional!: string;

  @IsInt()
  distrito_id!: number;

  @IsUUID()
  persona_id!: string;
}
