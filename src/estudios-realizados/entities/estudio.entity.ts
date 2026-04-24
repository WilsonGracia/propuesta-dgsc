import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Estudio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  nombre: string;

  @Column({ type: 'date', nullable: false })
  fecha_obtencion: string;

  @Column({ type: 'uuid', nullable: false })
  persona_id: string;

  @Column({ type: 'uuid', nullable: false })
  carrera_id: string;
}
