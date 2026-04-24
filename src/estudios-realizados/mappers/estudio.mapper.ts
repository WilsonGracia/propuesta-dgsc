import { UpsertEstudioDto } from '../dtos/inputs/upsert-estudio.dto';
import { ShowEstudioResumenDto } from '../dtos/outputs/show-estudio-resumen.dto';
import { ShowEstudioCompletoDto } from '../dtos/outputs/show-estudio-completo.dto';

export class EstudioMapper {
  static toParams(
    dto: UpsertEstudioDto,
    personaId: string,
  ): {
    estudio_id: string | null;
    nombre: string;
    fecha_obtencion: string;
    persona_id: string;
    carrera_id: string;
    tipo_documento_id: string | null;
    documento_id: string;
    grado_academico_id: string | null;
    registro_id: string | null;
    tomo: string | null;
    folio: string | null;
    asiento: string | null;
    registro_publico: boolean | null;
  } {
    return {
      estudio_id: dto.estudio_id ?? null,
      nombre: dto.nombre,
      fecha_obtencion: dto.fecha_obtencion,
      persona_id: personaId,
      carrera_id: dto.carrera_id,
      tipo_documento_id: dto.tipo_documento_id ?? null,
      documento_id: dto.documento_id,
      grado_academico_id: dto.grado_academico_id ?? null,
      registro_id: dto.registro_id ?? null,
      tomo: dto.tomo ?? null,
      folio: dto.folio ?? null,
      asiento: dto.asiento ?? null,
      registro_publico: dto.registro_publico ?? null,
    };
  }

  static toResumenDto(row: any): ShowEstudioResumenDto {
    return {
      estudio_id: row.estudio_id,
      registro_id: row.registro_id,
      tipo_documento_id: row.tipo_documento_id,
      tipo_documento: row.tipo_documento,
      nivel_academico: row.nivel_academico,
      institucion_academica: row.institucion_academica,
      carrera: row.carrera,
      fecha_obtencion: row.fecha_obtencion,
    };
  }

  static toResumenDtoList(rows: any[]): ShowEstudioResumenDto[] {
    return rows.map((r) => EstudioMapper.toResumenDto(r));
  }

  static toCompletoDto(row: any): ShowEstudioCompletoDto {
    return {
      estudio_id: row.estudio_id,
      registro_id: row.registro_id,
      tipo_documento_id: row.tipo_documento_id,
      persona_id: row.persona_id,
      carrera_id: row.carrera_id,
      nivel_academico_id: row.nivel_academico_id,
      institucion_academica_id: row.institucion_academica_id,
      grado_academico_id: row.grado_academico_id,
      nombre: row.nombre,
      fecha_obtencion: row.fecha_obtencion,
      documento_id: row.documento_id,
      tomo: row.tomo,
      folio: row.folio,
      asiento: row.asiento,
      registro_publico: row.registro_publico,
    };
  }

  static toCompletoDtoList(rows: any[]): ShowEstudioCompletoDto[] {
    return rows.map((r) => EstudioMapper.toCompletoDto(r));
  }
}
