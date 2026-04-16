import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Persona } from '../entities/persona.entity';
import { UpsertPersonaDto } from '../dtos/inputs/upsert-persona.dto';
import { response } from 'express';

@Injectable()
export class PersonaRepository {
  constructor(private readonly dataSource: DataSource) {}

  async insertar(entity: Persona): Promise<void> {
    await this.dataSource.query(
      `CALL insertar_personas($1, $2, $3, $4, $5, $6, $7, $8, $9::SMALLINT, $10, $11)`,
      [
        entity.nombre,
        entity.apellido1,
        entity.apellido2,
        entity.nombre_padre,
        entity.nombre_madre,
        entity.conocido_como,
        entity.fecha_nacimiento,
        entity.usuario_id,
        entity.genero_id,
        entity.distrito_id,
        entity.nacionalidad_id,
      ],
    );
  }

  async upsertPersonaR(dto: UpsertPersonaDto): Promise<void> {
    await this.dataSource.query(
      `CALL sp_actualiza_persona_por_uId(
      $1, $2, $3, $4, $5, $6, $7, $8, $9::SMALLINT, $10, $11
    )`,
      [
        dto.nombre,
        dto.apellido1,
        dto.apellido2,
        dto.nombre_padre,
        dto.nombre_madre,
        dto.conocido_como,
        dto.fecha_nacimiento,
        dto.usuario_id,
        dto.genero_id,
        dto.distrito_id,
        dto.nacionalidad_id,
      ],
    );
  }

  async muestraDatosPersonalesUIdR(id: string): Promise<any> {
    const response = await this.dataSource.query(
      `SELECT * FROM fn_mostrar_datos_personales_uId($1)`,
      [id],
    );

    return response;
  }
}
