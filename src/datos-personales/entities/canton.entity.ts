import { Entity, Column, ForeignKey, ManyToOne, PrimaryColumn } from 'typeorm';
import { Provincia } from './provincia.entity';

@Entity('canton')
export class Canton {
  @PrimaryColumn('integer')
  id: number;

  @Column('varchar', { length: 80 })
  nombre: string;

  @ForeignKey(() => Provincia)
  @Column('smallint')
  provincia_id: number;

  @ManyToOne(() => Provincia)
  provincia: Provincia;
}
