import { CreateUsuarioDto } from '../dtos/inputs/create-usuario.dto';
import { UsuarioDto } from '../dtos/outputs/usuario.dto';
import { Usuario } from '../entities/usuario.entity';

export class UsuarioMapper {
  static toEntity(dto: CreateUsuarioDto): Usuario {
    const entity = new Usuario();

    entity.id = dto.id;
    entity.pass = dto.pass;
    entity.email = dto.email;

    return entity;
  }

  static toDTOC(entity: Usuario, token: string): UsuarioDto {
    const dto = new UsuarioDto();
    dto.id = entity.id;
    dto.email = entity.email;
    dto.token = token;

    return dto;
  }
}
