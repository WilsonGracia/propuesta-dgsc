import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Carrera {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  nombre: string;

  @Column({ type: 'uuid', nullable: false })
  institucion_academica_id: string;
}
