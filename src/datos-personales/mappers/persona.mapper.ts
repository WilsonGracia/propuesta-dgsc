import { Persona } from '../entities/persona.entity';
import { CreatePersonaDto } from '../dtos/inputs/create-persona.dto';
import { ShowPersonaDatosPersonalesDto } from '../dtos/outputs/show-persona-datos.personales.dto';

export class PersonaMapper {
  static toEntity(dto: CreatePersonaDto): Persona {
    const persona = new Persona();
    persona.nombre = dto.nombre;
    persona.apellido1 = dto.apellido1;
    persona.apellido2 = dto.apellido2;
    persona.nombre_padre = dto.nombre_padre;
    persona.nombre_madre = dto.nombre_madre;
    persona.conocido_como = dto.conocido_como ?? null;
    persona.fecha_nacimiento = dto.fecha_nacimiento as any;
    persona.usuario_id = dto.usuario_id;
    persona.genero_id = dto.genero_id;
    persona.distrito_id = dto.distrito_id;
    persona.nacionalidad_id = dto.nacionalidad_id;
    return persona;
  }

  static toDto(entity: Persona): CreatePersonaDto {
    const dto = new CreatePersonaDto();
    dto.nombre = entity.nombre;
    dto.apellido1 = entity.apellido1;
    dto.apellido2 = entity.apellido2;
    dto.nombre_padre = entity.nombre_padre;
    dto.nombre_madre = entity.nombre_madre;
    dto.conocido_como = entity.conocido_como;
    dto.fecha_nacimiento = entity.fecha_nacimiento;
    dto.usuario_id = entity.usuario_id;
    dto.genero_id = entity.genero_id;
    dto.distrito_id = entity.distrito_id;
    dto.nacionalidad_id = entity.nacionalidad_id;
    return dto;
  }

  static toDtoDatosPersonales(entity: Persona): ShowPersonaDatosPersonalesDto {
    const dto = new ShowPersonaDatosPersonalesDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    dto.apellido1 = entity.apellido1;
    dto.apellido2 = entity.apellido2;
    dto.nombre_padre = entity.nombre_padre;
    dto.nombre_madre = entity.nombre_madre;
    dto.conocido_como = entity.conocido_como;
    dto.fecha_nacimiento = entity.fecha_nacimiento;
    dto.usuario_id = entity.usuario_id;
    dto.genero_id = entity.genero_id;
    dto.distrito_id = entity.distrito_id;
    dto.nacionalidad_id = entity.nacionalidad_id;
    return dto;
  }
}
