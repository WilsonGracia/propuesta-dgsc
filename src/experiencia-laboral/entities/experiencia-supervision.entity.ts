import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ExperienciaSupervision {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  experiencia_laboral_id: string | null;

  @Column({ type: 'int', nullable: true })
  total_meses: number | null;
}
