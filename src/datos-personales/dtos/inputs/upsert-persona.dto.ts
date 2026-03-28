import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsInt,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class UpsertPersonaDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @MinLength(4, { message: 'El nombre debe tener al menos 4 caracteres' })
  @MaxLength(80, { message: 'El nombre no puede exceder 80 caracteres' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El primer apellido no puede estar vacío' })
  @MinLength(4, {
    message: 'El primer apellido debe tener al menos 4 caracteres',
  })
  @MaxLength(80, {
    message: 'El primer apellido no puede exceder 80 caracteres',
  })
  apellido1: string;

  @IsString()
  @IsNotEmpty({ message: 'El segundo apellido no puede estar vacío' })
  @MinLength(4, {
    message: 'El segundo apellido debe tener al menos 4 caracteres',
  })
  @MaxLength(80, {
    message: 'El segundo apellido no puede exceder 80 caracteres',
  })
  apellido2: string;

  @IsString()
  @IsNotEmpty({ message: 'El nombre del padre no puede estar vacío' })
  @MinLength(4, {
    message: 'El nombre del padre debe tener al menos 4 caracteres',
  })
  @MaxLength(210, {
    message: 'El nombre del padre no puede exceder 210 caracteres',
  })
  nombre_padre: string;

  @IsString()
  @IsNotEmpty({ message: 'El nombre de la madre no puede estar vacío' })
  @MinLength(4, {
    message: 'El nombre de la madre debe tener al menos 4 caracteres',
  })
  @MaxLength(210, {
    message: 'El nombre de la madre no puede exceder 210 caracteres',
  })
  nombre_madre: string;

  @IsOptional()
  @IsString()
  @MinLength(3, {
    message: 'El conocido como debe tener al menos 3 caracteres',
  })
  @MaxLength(80, { message: 'El conocido como no puede exceder 80 caracteres' })
  conocido_como?: string | null;

  @IsDateString(
    {},
    {
      message: 'La fecha de nacimiento debe ser una fecha válida (YYYY-MM-DD)',
    },
  )
  @IsNotEmpty({ message: 'La fecha de nacimiento no puede estar vacía' })
  fecha_nacimiento: string;

  @IsString()
  @IsNotEmpty({ message: 'El usuario_id no puede estar vacío' })
  @Matches(/^[0-9]{9,12}$/, {
    message:
      'El usuario_id debe contener solo dígitos y tener entre 9 y 12 caracteres',
  })
  usuario_id: string;

  @IsInt({ message: 'El genero_id debe ser un número entero' })
  @IsNotEmpty({ message: 'El genero_id no puede estar vacío' })
  genero_id: number;

  @IsInt({ message: 'El distrito_id debe ser un número entero' })
  @IsNotEmpty({ message: 'El distrito_id no puede estar vacío' })
  distrito_id: number;

  @IsString()
  @IsNotEmpty({ message: 'La nacionalidad_id no puede estar vacía' })
  @MaxLength(10, {
    message: 'La nacionalidad_id no puede exceder 10 caracteres',
  })
  nacionalidad_id: string;
}
