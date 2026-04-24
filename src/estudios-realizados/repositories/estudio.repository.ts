import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class EstudioRepository {
  constructor(private readonly dataSource: DataSource) {}

  async upsertEstudioCompletoR(
    estudio_id: string | null,
    nombre: string,
    fecha_obtencion: string,
    persona_id: string,
    carrera_id: string,
    tipo_documento_id: string | null,
    documento_id: string,
    grado_academico_id: string | null,
    registro_id: string | null,
    tomo: string | null,
    folio: string | null,
    asiento: string | null,
    registro_publico: boolean | null,
  ): Promise<void> {
    await this.dataSource.query(
      'CALL sp_upsert_estudio_completo($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)',
      [
        estudio_id,
        nombre,
        fecha_obtencion,
        persona_id,
        carrera_id,
        tipo_documento_id,
        documento_id,
        grado_academico_id,
        registro_id,
        tomo,
        folio,
        asiento,
        registro_publico,
      ],
    );
  }

  async obtenerDocumentosR(): Promise<any[]> {
    return this.dataSource.query('SELECT * FROM fn_obtener_documentos()');
  }

  async obtenerNivelesAcademicosR(): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_niveles_academicos()',
    );
  }

  async obtenerInstitucionesPorNivelR(
    nivel_academico_id: string,
  ): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_instituciones_por_nivel($1)',
      [nivel_academico_id],
    );
  }

  async obtenerCarrerasPorInstitucionR(
    institucion_academica_id: string,
  ): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_carreras_por_institucion($1)',
      [institucion_academica_id],
    );
  }

  async obtenerGradosPorNivelR(nivel_academico_id: string): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_grados_por_nivel($1)',
      [nivel_academico_id],
    );
  }

  //!! EDITAR, OBTENER Y ELIMNAR ESTUDIO

  async deleteEstudioCompletoR(
    estudio_id: string,
    persona_id: string,
  ): Promise<void> {
    await this.dataSource.query('CALL sp_delete_estudio_completo($1,$2)', [
      estudio_id,
      persona_id,
    ]);
  }

  async obtenerEstudiosPorPersonaR(persona_id: string): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_estudios_por_persona($1)',
      [persona_id],
    );
  }

  async obtenerEstudioCompletoR(
    estudio_id: string,
    tipo_documento_id: string,
    registro_id: string | null,
    persona_id: string,
  ): Promise<any[]> {
    return this.dataSource.query(
      'SELECT * FROM fn_obtener_estudio_completo($1,$2,$3,$4)',
      [estudio_id, tipo_documento_id, registro_id, persona_id],
    );
  }
}
