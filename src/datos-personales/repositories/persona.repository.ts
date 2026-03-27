import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Persona } from '../entities/persona.entity';

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
}
