import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoDocumento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  estudio_id: string;

  @Column({ type: 'uuid', nullable: false })
  documento_id: string;
}
