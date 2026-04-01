import { ShowCantonDto } from '../dtos/outputs/show-canton.dto';
import { Canton } from '../entities/canton.entity';

export class CantonMapper {
  static toDto(entity: Canton): ShowCantonDto {
    const dto = new ShowCantonDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    dto.provincia_id = entity.provincia_id;
    return dto;
  }
}
