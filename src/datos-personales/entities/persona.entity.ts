import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  apellido1: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  apellido2: string;

  @Column({ type: 'varchar', length: 210, nullable: false })
  nombre_padre: string;

  @Column({ type: 'varchar', length: 210, nullable: false })
  nombre_madre: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  conocido_como: string | null;

  @Column({ type: 'date', nullable: false })
  fecha_nacimiento: string;

  @Column({ type: 'varchar', length: 12, nullable: false })
  usuario_id: string;

  @Column({ type: 'smallint', nullable: false })
  genero_id: number;

  @Column({ type: 'int', nullable: false })
  distrito_id: number;

  @Column({ type: 'varchar', length: 10, nullable: false })
  nacionalidad_id: string;
}
