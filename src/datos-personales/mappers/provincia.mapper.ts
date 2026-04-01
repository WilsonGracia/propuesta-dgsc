import { Injectable } from '@nestjs/common';
import { Provincia } from '../entities/provincia.entity';
import { ShowProvinciaDto } from '../dtos/outputs/show-provincia.dto';

@Injectable()
export class ProvinciaMapper {
  static toDto(entity: Provincia): ShowProvinciaDto {
    const dto = new ShowProvinciaDto();

    dto.id = entity.id;
    dto.nombre = entity.nombre;

    return dto;
  }

  static toEntity(dto: ShowProvinciaDto): Provincia {
    const entity = new Provincia();
    entity.id = dto.id;
    entity.nombre = dto.nombre;
    return entity;
  }
}
