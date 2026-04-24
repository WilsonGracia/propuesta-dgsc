import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InstitucionAcademica {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  nombre: string;

  @Column({ type: 'uuid', nullable: false })
  nivel_academico_id: string;

  @Column({ type: 'boolean', nullable: false })
  publica: boolean;
}
