import { Injectable } from '@nestjs/common';
import { DatoContactoRepository } from './repositories/dato_contacto.repository';
import { UpsertDatoContactoDto } from './dtos/inputs/upsert-dato_contacto.dto';
import { handleDbError } from 'src/common/helpers/database-error.helper';

@Injectable()
export class DatosLocalizacionService {
  constructor(private readonly datoContactoRepo: DatoContactoRepository) {}

  async upsertDatoContactoR(dto: UpsertDatoContactoDto): Promise<void> {
    try {
      await this.datoContactoRepo.upsertDatoContactoR(dto);
    } catch (error) {
      handleDbError(error);
    }
  }
}
