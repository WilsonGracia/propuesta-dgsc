import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GradoAcademico {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  nombre: string;

  @Column({ type: 'uuid', nullable: false })
  nivel_academico_id: string;
}
