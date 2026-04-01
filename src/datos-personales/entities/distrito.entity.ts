import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Canton } from './canton.entity';

@Entity('distrito')
export class Distrito {
  @PrimaryColumn('integer')
  id: number;

  @Column('varchar', { length: 80 })
  nombre: string;

  @Column('integer')
  canton_id: number;

  @ManyToOne(() => Canton)
  @JoinColumn({ name: 'canton_id' })
  canton: Canton;
}
