import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UpsertDatoContactoDto } from '../dtos/inputs/upsert-dato_contacto.dto';

@Injectable()
export class DatoContactoRepository {
  constructor(private readonly dataSource: DataSource) {}

  async upsertDatoContactoR(
    personaId: string,
    dto: UpsertDatoContactoDto,
  ): Promise<void> {
    await this.dataSource.query(
      `CALL sp_actualiza_dato_contacto_por_persona_id($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        dto.apartado_postal,
        dto.direccion,
        dto.numero_principal,
        dto.numero_opcional ?? null,
        dto.numero_trabajo ?? null,
        dto.numero_ext ?? null,
        dto.fax ?? null,
        dto.correo_principal,
        dto.correo_opcional ?? null,
        dto.distrito_id,
        personaId,
      ],
    );
  }

  async obtenerDatoContactoPorPersonaIdR(personaId: string) {
    const result = await this.dataSource.query(
      `
    SELECT * 
    FROM fn_mostrar_datos_contacto_pId($1::UUID);
    `,
      [personaId],
    );

    console.log('holaaaa');

    return result[0] ?? null;
  }
}
