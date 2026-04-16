import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Persona } from 'src/datos-personales/entities/persona.entity';
import { PersonaMapper } from 'src/datos-personales/mappers/persona.mapper';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly dataSource: DataSource) {}

  async obtenerGeneros(): Promise<{ id: number; nombre: string }[]> {
    return await this.dataSource.query('SELECT * FROM fn_obtener_generos()');
  }

  async createUsuarioR(entity: Usuario): Promise<void> {
    await this.dataSource.query('CALL sp_crear_usuario($1,$2,$3)', [
      entity.id,
      entity.pass,
      entity.email,
    ]);
  }

  async loginUsuarioR(id: string): Promise<Usuario | null> {
    const result = await this.dataSource.query(
      'SELECT * FROM fn_login_usuario($1)',
      [id],
    );

    const row = result[0] ?? null;
    if (!row) return null;

    const entity = new Usuario();
    entity.id = row.uid;
    entity.pass = row.upass;
    entity.email = row.uemail;
    return entity;
  }
}

/*

sp_crear_usuario(
	u_id VARCHAR(12),
    u_pass VARCHAR(320),
	u_email VARCHAR(320)
)
*/
