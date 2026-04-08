import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateUsuarioDto } from './dtos/inputs/create-usuario.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/create-usuario')
  async createUsuarioC(@Body() dto: CreateUsuarioDto): Promise<void> {
    await this.loginService.createUsuarioS(dto);
  }
}
