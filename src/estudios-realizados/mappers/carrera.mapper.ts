import { ShowCarreraDto } from '../dtos/outputs/show-carrera.dto';
import { Carrera } from '../entities/carrera.entity';

export class CarreraMapper {
  static toDto(entity: Carrera): ShowCarreraDto {
    return {
      id: entity.id,
      nombre: entity.nombre,
      institucionAcademicaId: entity.institucion_academica_id,
    };
  }

  static toDtoList(entities: Carrera[]): ShowCarreraDto[] {
    return entities.map((e) => this.toDto(e));
  }
}
