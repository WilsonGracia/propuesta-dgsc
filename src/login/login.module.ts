import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport'; // 👈 nuevo
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UsuarioRepository } from './repositories/usuario.repository';
import { JwtStrategy } from './strategies/jwt.strategy'; // 👈 nuevo

@Module({
  imports: [
    PassportModule, // 👈 nuevo
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  providers: [LoginService, UsuarioRepository, JwtStrategy],
  controllers: [LoginController],
})
export class LoginModule {}
