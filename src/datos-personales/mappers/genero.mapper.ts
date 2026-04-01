import { ShowGeneroDto } from '../dtos/outputs/show-genero.dto';
import { Genero } from '../entities/genero.entity';

export class GeneroMapper {
  static toDto(entity: Genero): ShowGeneroDto {
    const dto = new ShowGeneroDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    return dto;
  }

  static toEntity(dto: ShowGeneroDto): Genero {
    const genero = new Genero();
    genero.id = dto.id;
    genero.nombre = dto.nombre;
    return genero;
  }
}
