import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('provincia')
export class Provincia {
  @PrimaryColumn({ type: 'smallint' })
  id: number;

  @Column({ type: 'varchar', length: 20 })
  nombre: string;
}
