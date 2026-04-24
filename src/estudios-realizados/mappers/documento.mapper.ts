import { Documento } from '../entities/documento.entity';
import { ShowDocumentoDto } from '../dtos/outputs/show-documento.dto';

export class DocumentoMapper {
  static toDto(entity: Documento): ShowDocumentoDto {
    return {
      id: entity.id,
      nombre: entity.nombre,
    };
  }

  static toDtoList(entities: Documento[]): ShowDocumentoDto[] {
    return entities.map((e) => this.toDto(e));
  }
}
