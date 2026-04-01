import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class GeneroRepository {
  constructor(private readonly dataSource: DataSource) {}

  async obtenerGeneros(): Promise<{ id: number; nombre: string }[]> {
    return await this.dataSource.query('SELECT * FROM fn_obtener_generos()');
  }
}
