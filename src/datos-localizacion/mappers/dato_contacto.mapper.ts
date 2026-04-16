import { UpsertDatoContactoDto } from '../dtos/inputs/upsert-dato_contacto.dto';
import { ShowDatoContactoDto } from '../dtos/outputs/show-dato_contacto.dto';
import { DatoContacto } from '../entities/dato_contacto.entity';

export class DatoContactoMapper {
  static toEntity(dto: UpsertDatoContactoDto): DatoContacto {
    const entity = new DatoContacto();

    entity.apartadoPostal = dto.apartado_postal;
    entity.direccion = dto.direccion;
    entity.numeroPrincipal = dto.numero_principal;
    entity.numeroOpcional = dto.numero_opcional!;
    entity.numeroTrabajo = dto.numero_trabajo!;
    entity.numeroExt = dto.numero_ext!;
    entity.fax = dto.fax!;
    entity.correoPrincipal = dto.correo_principal;
    entity.correoOpcional = dto.correo_opcional!;
    entity.distritoId = dto.distrito_id;
    entity.personaId = dto.persona_id;

    return entity;
  }

  static toDto(entity: DatoContacto): ShowDatoContactoDto {
    const dto = new ShowDatoContactoDto();

    dto.id = entity.id;
    dto.apartado_postal = entity.apartadoPostal;
    dto.direccion = entity.direccion;
    dto.numero_principal = entity.numeroPrincipal;
    dto.numero_opcional = entity.numeroOpcional;
    dto.numero_trabajo = entity.numeroTrabajo;
    dto.numero_ext = entity.numeroExt;
    dto.fax = entity.fax;
    dto.correo_principal = entity.correoPrincipal;
    dto.correo_opcional = entity.correoOpcional;
    dto.distrito_id = entity.distritoId;
    dto.persona_id = entity.personaId;

    return dto;
  }
}
