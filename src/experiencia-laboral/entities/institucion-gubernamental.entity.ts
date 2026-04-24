import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InstitucionGubernamental {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  nombre: string;
}
