import { ShowInstitucionAcademicaDto } from '../dtos/outputs/show-institucion-academica.dto';
import { InstitucionAcademica } from '../entities/institucion-academica.entity';

export class InstitucionAcademicaMapper {
  static toDto(entity: InstitucionAcademica): ShowInstitucionAcademicaDto {
    return {
      id: entity.id,
      nombre: entity.nombre,
      publica: entity.publica,
      nivelAcademicoId: entity.nivel_academico_id,
    };
  }

  static toDtoList(
    entities: InstitucionAcademica[],
  ): ShowInstitucionAcademicaDto[] {
    return entities.map((e) => this.toDto(e));
  }
}
