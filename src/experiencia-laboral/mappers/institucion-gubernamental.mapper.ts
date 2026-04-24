import { InstitucionGubernamental } from '../entities/institucion-gubernamental.entity';
import { ShowInstitucionGubernamentalDto } from '../dtos/outputs/show-institucion-gubernamental.dto';

export class InstitucionGubernamentalMapper {
  static toDto(
    entity: InstitucionGubernamental,
  ): ShowInstitucionGubernamentalDto {
    return {
      id: entity.id,
      nombre: entity.nombre,
    };
  }

  static toDtoList(
    entities: InstitucionGubernamental[],
  ): ShowInstitucionGubernamentalDto[] {
    return entities.map((e) => this.toDto(e));
  }
}
