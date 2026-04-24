import { ExperienciaLaboral } from '../entities/experiencia-laboral.entity';
import { ShowExperienciaLaboralDto } from '../dtos/outputs/show-experiencia-laboral.dto';
import { ShowExperienciaLaboralResumenDto } from '../dtos/outputs/show-experiencia-laboral-resumen.dto';

export class ExperienciaLaboralMapper {
  static toDto(raw: any): ShowExperienciaLaboralDto {
    return {
      experiencia_laboral_id: raw.experiencia_laboral_id,
      nombre_organizacion: raw.nombre_organizacion,
      puesto_persona: raw.puesto_persona,
      fecha_ingreso: raw.fecha_ingreso,
      fecha_salida: raw.fecha_salida ?? null,
      actual: raw.actual,
      funcion: raw.funcion,
      persona_id: raw.persona_id,
      tipo_organizacion_id: raw.tipo_organizacion_id,
      puesto_id: raw.puesto_id,
      total_meses: raw.total_meses ?? null,
    };
  }

  static toDtoList(rows: any[]): ShowExperienciaLaboralDto[] {
    return rows.map((r) => this.toDto(r));
  }

  static toParams(dto: any, personaId: string) {
    return {
      experiencia_laboral_id: dto.experiencia_laboral_id ?? null,
      nombre_organizacion: dto.nombre_organizacion,
      puesto_persona: dto.puesto_persona,
      fecha_ingreso: dto.fecha_ingreso,
      fecha_salida: dto.fecha_salida ?? null,
      actual: dto.actual,
      funcion: dto.funcion,
      persona_id: personaId,
      tipo_organizacion_id: dto.tipo_organizacion_id,
      puesto_id: dto.puesto_id,
      total_meses: dto.total_meses ?? null,
    };
  }

  static toResumenDto(raw: any): ShowExperienciaLaboralResumenDto {
    return {
      experiencia_laboral_id: raw.experiencia_laboral_id,
      nombre_organizacion: raw.nombre_organizacion,
      puesto_persona: raw.puesto_persona,
      fecha_ingreso: raw.fecha_ingreso,
      fecha_salida: raw.fecha_salida ?? null,
      actual: raw.actual,
      puesto_equivalente: raw.puesto_equivalente,
    };
  }

  static toResumenDtoList(rows: any[]): ShowExperienciaLaboralResumenDto[] {
    return rows.map((r) => this.toResumenDto(r));
  }
}
