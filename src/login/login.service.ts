import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioRepository } from './repositories/usuario.repository';
import { CreateUsuarioDto } from './dtos/inputs/create-usuario.dto';
import { handleDbError } from 'src/common/helpers/database-error.helper';
import { UsuarioMapper } from './mappers/usuario.mapper';
import { UsuarioDto } from './dtos/outputs/usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class LoginService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly jwtService: JwtService,
  ) {}

  async createUsuarioS(dto: CreateUsuarioDto): Promise<void> {
    const hashedPass = await bcrypt.hash(dto.pass, 10);
    const entity = UsuarioMapper.toEntity({ ...dto, pass: hashedPass });
    try {
      await this.usuarioRepository.createUsuarioR(entity);
    } catch (error) {
      handleDbError(error);
    }
  }

  async loginUsuarioS(id: string, pass: string): Promise<UsuarioDto> {
    try {
      const response = await this.usuarioRepository.loginUsuarioR(id);
      if (!response) throw new UnauthorizedException();

      const coincide = await bcrypt.compare(pass, response.pass);
      if (!coincide) throw new UnauthorizedException();

      const payload = { sub: response.id };
      const token = await this.jwtService.signAsync(payload);

      return UsuarioMapper.toDTOC(response as Usuario, token);
    } catch (error) {
      if (error instanceof UnauthorizedException) throw error;
      handleDbError(error);
    }
  }
}
