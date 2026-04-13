import { IsNotEmpty } from 'class-validator';

export class LoginUsuarioDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  pass: string;
}
