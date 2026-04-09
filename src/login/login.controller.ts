import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateUsuarioDto } from './dtos/inputs/create-usuario.dto';
import { UsuarioDto } from './dtos/outputs/usuario.dto';
import { LoginUsuarioDto } from './dtos/inputs/login-usuario.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/create-usuario')
  async createUsuarioC(@Body() dto: CreateUsuarioDto): Promise<void> {
    await this.loginService.createUsuarioS(dto);
  }

  @Post('/login')
  async loginUsuarioC(@Body() dto: LoginUsuarioDto): Promise<UsuarioDto> {
    return await this.loginService.loginUsuarioS(dto.id, dto.pass);
  }

  /*
loginUsuarioS(id: string, pass: string): Promise<UsuarioDto> {
*/
}
