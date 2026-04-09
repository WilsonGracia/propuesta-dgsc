import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @MaxLength(12, { message: 'La longitud de la cédula supera el limite' })
  @MinLength(8, { message: 'La longitud de la cédula es menor al limite' })
  @Matches(/^[0-9]+$/, {
    message: 'La cédula debe contener solo números',
  })
  id!: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @MaxLength(320, { message: 'La contraseña no debe exceder 320 caracteres' })
  @Matches(/[0-9]/, {
    message: 'La contraseña debe contener al menos un número',
  })
  @Matches(/[A-Z]/, {
    message: 'La contraseña debe contener al menos una mayúscula',
  })
  @Matches(/[!@#$%a^&*()-_+=.,;:"`~']/, {
    message: 'La contraseña debe contener al menos un carácter especial',
  })
  pass!: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'El email debe tener al menos 6 caracteres' })
  @MaxLength(320, { message: 'El email no debe exceder 320 caracteres' })
  @Matches(/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/, {
    message: 'El email no tiene un formato válido',
  })
  email!: string;
}
