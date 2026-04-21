import { Entity, Column } from 'typeorm';

@Entity('dato_contacto')
export class DatoContacto {
  @Column({ type: 'uuid' })
  id!: string;

  @Column({ type: 'int' })
  apartado_postal!: number;

  @Column({ type: 'varchar', length: 256 })
  direccion!: string;

  @Column({ type: 'varchar', length: 8 })
  numero_principal!: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  numero_opcional!: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  numero_trabajo!: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  numero_ext!: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  fax!: string;

  @Column({ type: 'varchar', length: 320 })
  correo_principal!: string;

  @Column({ type: 'varchar', length: 320, nullable: true })
  correo_opcional!: string;

  @Column({ type: 'int' })
  distrito_id!: number;

  @Column({ type: 'uuid' })
  persona_id!: string;
}
