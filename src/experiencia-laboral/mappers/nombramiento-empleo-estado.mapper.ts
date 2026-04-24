import { NombramientoEmpleoEstado } from '../entities/nombramiento-empleo-estado.entity';
import { ShowNombramientoEmpleoEstadoDto } from '../dtos/outputs/show-nombramiento-empleo-estado.dto';

export class NombramientoEmpleoEstadoMapper {
  static toDto(
    entity: NombramientoEmpleoEstado,
  ): ShowNombramientoEmpleoEstadoDto {
    return {
      id: entity.id,
      nombre: entity.nombre,
    };
  }

  static toDtoList(
    entities: NombramientoEmpleoEstado[],
  ): ShowNombramientoEmpleoEstadoDto[] {
    return entities.map((e) => this.toDto(e));
  }
}
