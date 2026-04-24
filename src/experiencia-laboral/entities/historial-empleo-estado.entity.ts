import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class HistorialEmpleoEstado {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: false })
  empleo: boolean;

  @Column({ type: 'uuid', nullable: false })
  persona_id: string;

  @Column({ type: 'uuid', nullable: true })
  nombramiento_empleo_estado_id: string | null;

  @Column({ type: 'uuid', nullable: true })
  institucion_gubernamental_id: string | null;
}
