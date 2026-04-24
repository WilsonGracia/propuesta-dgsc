import { UpsertDatoContactoDto } from '../dtos/inputs/upsert-dato_contacto.dto';
import { ShowDatoContactoDto } from '../dtos/outputs/show-dato_contacto.dto';
import { DatoContacto } from '../entities/dato_contacto.entity';

export class DatoContactoMapper {
  static toEntity(dto: UpsertDatoContactoDto): DatoContacto {
    const entity = new DatoContacto();

    entity.apartado_postal = dto.apartado_postal;
    entity.direccion = dto.direccion;
    entity.numero_principal = dto.numero_principal;
    entity.numero_opcional = dto.numero_opcional!;
    entity.numero_trabajo = dto.numero_trabajo!;
    entity.numero_ext = dto.numero_ext!;
    entity.fax = dto.fax!;
    entity.correo_principal = dto.correo_principal;
    entity.correo_opcional = dto.correo_opcional!;
    entity.distrito_id = dto.distrito_id;

    return entity;
  }

  static toDto(entity: DatoContacto): ShowDatoContactoDto {
    const dto = new ShowDatoContactoDto();

    dto.id = entity.id;
    dto.apartado_postal = entity.apartado_postal;
    dto.direccion = entity.direccion;
    dto.numero_principal = entity.numero_principal;
    dto.numero_opcional = entity.numero_opcional;
    dto.numero_trabajo = entity.numero_trabajo;
    dto.numero_ext = entity.numero_ext;
    dto.fax = entity.fax;
    dto.correo_principal = entity.correo_principal;
    dto.correo_opcional = entity.correo_opcional;
    dto.distrito_id = entity.distrito_id;
    dto.persona_id = entity.persona_id;

    return dto;
  }
}
