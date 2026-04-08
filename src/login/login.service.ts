import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './repositories/usuario.repository';
import { CreateUsuarioDto } from './dtos/inputs/create-usuario.dto';
import { handleDbError } from 'src/common/helpers/database-error.helper';
import { UsuarioMapper } from './mappers/usuario.mapper';

@Injectable()
export class LoginService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async createUsuarioS(dto: CreateUsuarioDto): Promise<void> {
    const entity = UsuarioMapper.toEntity(dto);
    try {
      await this.usuarioRepository.createUsuarioR(entity);
    } catch (error) {
      handleDbError(error);
    }
  }
}
