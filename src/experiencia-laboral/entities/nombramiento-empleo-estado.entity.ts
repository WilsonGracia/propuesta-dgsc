import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NombramientoEmpleoEstado {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  nombre: string;
}
