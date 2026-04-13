import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryColumn('varchar', { length: 12 })
  id!: string;

  @Column('varchar', { length: 320, nullable: false })
  pass!: string;

  @Column('varchar', { length: 320, nullable: false, unique: true })
  email!: string;
}
