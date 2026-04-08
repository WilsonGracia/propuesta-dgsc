import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UsuarioRepository } from './repositories/usuario.repository';

@Module({
  providers: [LoginService, UsuarioRepository],
  controllers: [LoginController],
})
export class LoginModule {}
