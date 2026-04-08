import { CreateUsuarioDto } from '../dtos/inputs/create-usuario.dto';
import { Usuario } from '../entities/usuario.entity';

export class UsuarioMapper {
  static toEntity(dto: CreateUsuarioDto): Usuario {
    const entity = new Usuario();

    entity.id = dto.id;
    entity.pass = dto.pass;
    entity.email = dto.email;

    return entity;
  }
}
