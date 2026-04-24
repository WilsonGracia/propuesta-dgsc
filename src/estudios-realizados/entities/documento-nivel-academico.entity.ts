import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class DocumentoNivelAcademico {
  @PrimaryColumn({ type: 'uuid' })
  documento_id: string;

  @PrimaryColumn({ type: 'uuid' })
  nivel_academico_id: string;
}
