import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  IsUUID,
  IsEmail,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'numerosDiferentes', async: false })
class NumerosDiferentesConstraint implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const o = args.object as any;

    if (o.numero_opcional && o.numero_opcional === o.numero_principal)
      return false;
    if (o.numero_ext && o.numero_ext === o.numero_principal) return false;
    if (o.numero_opcional && o.numero_ext && o.numero_opcional === o.numero_ext)
      return false;

    return true;
  }

  defaultMessage() {
    return 'El número principal, opcional y extensión no pueden ser iguales entre sí';
  }
}

export class UpsertDatoContactoDto {
  @IsInt({ message: 'El apartado postal debe ser un número entero' })
  @IsNotEmpty({ message: 'El apartado postal es obligatorio' })
  apartado_postal!: number;

  @IsString({ message: 'La dirección debe ser un texto' })
  @IsNotEmpty({ message: 'La dirección es obligatoria' })
  @Length(1, 256, {
    message: 'La dirección debe tener entre 1 y 256 caracteres',
  })
  direccion!: string;

  @IsString({ message: 'El número principal debe ser un texto' })
  @Matches(/^[0-9]{8}$/, {
    message:
      'El número principal debe contener exactamente 8 dígitos numéricos',
  })
  numero_principal!: string;

  @IsOptional()
  @IsString({ message: 'El número opcional debe ser un texto' })
  @Matches(/^[0-9]{8}$/, {
    message: 'El número opcional debe contener exactamente 8 dígitos numéricos',
  })
  numero_opcional?: string;

  @IsOptional()
  @IsString({ message: 'El número de trabajo debe ser un texto' })
  @Matches(/^[0-9]{8}$/, {
    message:
      'El número de trabajo debe contener exactamente 8 dígitos numéricos',
  })
  numero_trabajo?: string;

  @IsOptional()
  @IsString({ message: 'La extensión debe ser un texto' })
  @Length(1, 12, {
    message: 'La extensión debe tener entre 1 y 12 caracteres',
  })
  numero_ext?: string;

  @IsOptional()
  @IsString({ message: 'El fax debe ser un texto' })
  @Matches(/^[0-9]{8}$/, {
    message: 'El fax debe contener exactamente 8 dígitos numéricos',
  })
  fax?: string;

  @IsString({ message: 'El correo principal debe ser un texto' })
  @IsEmail({}, { message: 'El correo principal debe tener un formato válido' })
  @Length(1, 320, {
    message: 'El correo principal debe tener entre 1 y 320 caracteres',
  })
  correo_principal!: string;

  @IsOptional()
  @IsString({ message: 'El correo opcional debe ser un texto' })
  @IsEmail({}, { message: 'El correo opcional debe tener un formato válido' })
  @Length(1, 320, {
    message: 'El correo opcional debe tener entre 1 y 320 caracteres',
  })
  correo_opcional?: string;

  @IsInt({ message: 'El distrito debe ser un número entero' })
  @IsNotEmpty({ message: 'El distrito es obligatorio' })
  distrito_id!: number;

  @IsUUID('4', { message: 'El id de la persona debe ser un UUID válido' })
  @IsNotEmpty({ message: 'El id de la persona es obligatorio' })
  persona_id!: string;

  @Validate(NumerosDiferentesConstraint)
  private readonly _numerosValidacion!: boolean;
}
