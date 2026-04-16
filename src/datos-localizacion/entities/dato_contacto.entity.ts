import { Distrito } from 'src/datos-personales/entities/distrito.entity';
import { Persona } from 'src/datos-personales/entities/persona.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('dato_contacto')
export class DatoContacto {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'int', name: 'apartado_postal' })
  apartadoPostal!: number;

  @Column({ type: 'varchar', length: 256 })
  direccion!: string;

  @Column({ type: 'varchar', length: 8, name: 'numero_principal' })
  numeroPrincipal!: string;

  @Column({
    type: 'varchar',
    length: 8,
    name: 'numero_opcional',
    nullable: true,
  })
  numeroOpcional!: string;

  @Column({
    type: 'varchar',
    length: 8,
    name: 'numero_trabajo',
    nullable: true,
  })
  numeroTrabajo!: string;

  @Column({ type: 'varchar', length: 12, name: 'numero_ext', nullable: true })
  numeroExt!: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  fax!: string;

  @Column({ type: 'varchar', length: 320, name: 'correo_principal' })
  correoPrincipal!: string;

  @Column({
    type: 'varchar',
    length: 320,
    name: 'correo_opcional',
    nullable: true,
  })
  correoOpcional!: string;

  @Column({ type: 'int', name: 'distrito_id' })
  distritoId!: number;

  @Column({ type: 'uuid', name: 'persona_id', unique: true })
  personaId!: string;

  @OneToOne(() => Persona)
  @JoinColumn({ name: 'persona_id' })
  persona!: Persona;

  @OneToOne(() => Distrito)
  @JoinColumn({ name: 'distrito_id' })
  distrito!: Distrito;
}
