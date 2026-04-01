import { doesNotMatch } from 'assert';
import { ShowDistritoDto } from '../dtos/outputs/show-distrito.dto';
import { Distrito } from '../entities/distrito.entity';

export class DistritoMapper {
  static toDto(entity: Distrito): ShowDistritoDto {
    const dto = new ShowDistritoDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    dto.canton_id = entity.canton_id;
    return dto;
  }

  // to entity ahorita misma no en necesario hacerlo
}
