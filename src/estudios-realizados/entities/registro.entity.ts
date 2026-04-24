import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  tomo: string | null;

  @Column({ type: 'varchar', length: 10, nullable: true })
  folio: string | null;

  @Column({ type: 'varchar', length: 10, nullable: true })
  asiento: string | null;

  @Column({ type: 'boolean', nullable: false })
  registro_publico: boolean;

  @Column({ type: 'uuid', nullable: false })
  estudio_id: string;
}
