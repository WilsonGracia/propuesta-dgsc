import { ShowGradoAcademicoDto } from '../dtos/outputs/show-grado-academico.dto';
import { GradoAcademico } from '../entities/grado-academico.entity';

export class GradoAcademicoMapper {
  static toDto(entity: GradoAcademico): ShowGradoAcademicoDto {
    return {
      id: entity.id,
      nombre: entity.nombre,
      nivelAcademicoId: entity.nivel_academico_id,
    };
  }

  static toDtoList(entities: GradoAcademico[]): ShowGradoAcademicoDto[] {
    return entities.map((e) => this.toDto(e));
  }
}
