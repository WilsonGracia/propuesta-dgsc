import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ExperienciaLaboral {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre_organizacion: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  puesto_persona: string;

  @Column({ type: 'date', nullable: false })
  fecha_ingreso: string;

  @Column({ type: 'date', nullable: true })
  fecha_salida: string | null;

  @Column({ type: 'boolean', nullable: false })
  actual: boolean;

  @Column({ type: 'varchar', length: 2000, nullable: false })
  funcion: string;

  @Column({ type: 'uuid', nullable: false })
  persona_id: string;

  @Column({ type: 'uuid', nullable: false })
  tipo_organizacion_id: string;

  @Column({ type: 'uuid', nullable: false })
  puesto_id: string;
}
