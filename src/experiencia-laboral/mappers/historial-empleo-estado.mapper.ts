import { ShowHistorialEmpleoEstadoDto } from '../dtos/outputs/show-historial-empleo-estado.dto';

export class HistorialEmpleoEstadoMapper {
  static toDto(raw: any): ShowHistorialEmpleoEstadoDto {
    return {
      historial_empleo_estado_id: raw.historial_empleo_estado_id,
      empleo: raw.empleo,
      persona_id: raw.persona_id,
      nombramiento_empleo_estado_id: raw.nombramiento_empleo_estado_id ?? null,
      institucion_gubernamental_id: raw.institucion_gubernamental_id ?? null,
    };
  }

  static toDtoList(rows: any[]): ShowHistorialEmpleoEstadoDto[] {
    return rows.map((r) => this.toDto(r));
  }
}
