import { ShowNivelAcademicoDto } from '../dtos/outputs/show-nivel-academico.dto';
import { NivelAcademico } from '../entities/nivel-academico.entity';

export class NivelAcademicoMapper {
  static toDto(entity: NivelAcademico): ShowNivelAcademicoDto {
    return {
      id: entity.id,
      nombre: entity.nombre,
    };
  }

  static toDtoList(
    rows: { id: string; nombre: string }[],
  ): ShowNivelAcademicoDto[] {
    return rows.map((r) => {
      const entity = new NivelAcademico();
      entity.id = r.id;
      entity.nombre = r.nombre;

      return this.toDto(entity);
    });
  }
}
