import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UbicacionRepository {
  constructor(private readonly dataSource: DataSource) {}

  async obtenerProvinciasR(): Promise<{ id: number; nombre: String }[]> {
    return await this.dataSource.query('SELECT * FROM fn_obtener_provincias()');
  }

  async obtenerDistritosR(
    c_id: number,
  ): Promise<{ id: number; nombre: String; canton_id: number }[]> {
    return await this.dataSource.query(
      'SELECT * FROM fn_obtener_distrito_cantonId($1::SMALLINT)',
      [c_id],
    );
  }

  async obtenerCantonesR(
    p_id: number,
  ): Promise<{ id: number; nombre: String; provincia_id: number }[]> {
    return await this.dataSource.query(
      'SELECT * FROM fn_obtener_cantones_provinciaId($1::SMALLINT)',
      [p_id],
    );
  }

  async obtenerUbicacionDId(id: string): Promise<any> {
    // obtiene pro y can por distrito id sacado de la persona en el front
    return await this.dataSource.query(
      'SELECT * FROM fn_mostrar_ubicacion_distrito($1)',
      [id],
    );
  }

  /*
  	id INTEGER,
	nombre VARCHAR(80),
	provincia_id SMALLINT

  */
}
