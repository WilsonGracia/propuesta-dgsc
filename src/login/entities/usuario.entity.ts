import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryColumn('varchar', { length: 12 })
  id: string;

  @Column('varchar', { length: 320 })
  pass: string;

  @Column('varchar', { length: 320 })
  email: string;
}
