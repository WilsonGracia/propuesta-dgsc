import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ExperienciaLaboralRepository {
  constructor(private readonly dataSource: DataSource) {}

  async upsertExperienciaLaboralR(
    experiencia_laboral_id: string | null,
    nombre_organizacion: string,
    puesto_persona: string,
    fecha_ingreso: string,
    fecha_salida: string | null,
    actual: boolean,
    funcion: string,
    persona_id: string,
    tipo_organizacion_id: string,
    puesto_id: string,
    total_meses: number | null,
  ): Promise<void> {
    await this.dataSource.query(
      'CALL sp_upsert_experiencia_laboral($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
      [
        experiencia_laboral_id,
        nombre_organizacion,
        puesto_persona,
        fecha_ingreso,
        fecha_salida,
        actual,
        funcion,
        persona_id,
        tipo_organizacion_id,
        puesto_id,
        total_meses,
      ],
    );
  }

  async upsertHistorialEmpleoEstadoR(
    historial_empleo_estado_id: string | null,
    empleo: boolean,
    persona_id: string,
    nombramiento_empleo_estado_id: string | null,
    institucion_gubernamental_id: string | null,
  ): Promise<void> {
    await this.dataSource.query(
      'CALL sp_upsert_historial_empleo_estado($1,$2,$3,$4,$5)',
      [
        historial_empleo_estado_id,
        empleo,
        persona_id,
        nombramiento_empleo_estado_id,
        institucion_gubernamental_id,
      ],
    );
  }

  async obtenerNombramientosEmpleoEstadoR(): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_nombramientos_empleo_estado()',
    );
  }

  async obtenerInstitucionesGubernamentalesR(): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_instituciones_gubernamentales()',
    );
  }

  async obtenerHistorialEmpleoEstadoR(persona_id: string): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_historial_empleo_estado($1)',
      [persona_id],
    );
  }

  async obtenerExperienciaLaboralCompletaR(
    persona_id: string,
    experiencia_laboral_id: string,
  ): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_experiencia_laboral_completa($1,$2)',
      [persona_id, experiencia_laboral_id],
    );
  }

  async obtenerExperienciasLaboralesPorPersonaR(
    persona_id: string,
  ): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_experiencias_laborales_por_persona($1)',
      [persona_id],
    );
  }
}
