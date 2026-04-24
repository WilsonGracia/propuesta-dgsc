import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NivelAcademico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  nombre: string;
}
