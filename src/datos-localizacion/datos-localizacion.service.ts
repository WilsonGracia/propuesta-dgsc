import { BadRequestException, Injectable } from '@nestjs/common';
import { DatoContactoRepository } from './repositories/dato_contacto.repository';
import { UpsertDatoContactoDto } from './dtos/inputs/upsert-dato_contacto.dto';
import { handleDbError } from 'src/common/helpers/database-error.helper';
import { ShowDatoContactoDto } from './dtos/outputs/show-dato_contacto.dto';
import { DatoContactoMapper } from './mappers/dato_contacto.mapper';
import { DatoContacto } from './entities/dato_contacto.entity';
import { DatosPersonalesService } from 'src/datos-personales/datos-personales.service';

@Injectable()
export class DatosLocalizacionService {
  constructor(
    private readonly datoContactoRepo: DatoContactoRepository,
    private readonly datosPersonalesService: DatosPersonalesService,
  ) {}

  async upsertDatoContactoR(
    usuarioId: string,
    dto: UpsertDatoContactoDto,
  ): Promise<void> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);
    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }
    try {
      await this.datoContactoRepo.upsertDatoContactoR(personaId, dto);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerDatoContactoPorPersonaIdS(
    usuarioId: string,
  ): Promise<ShowDatoContactoDto> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);
    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }
    try {
      const response =
        await this.datoContactoRepo.obtenerDatoContactoPorPersonaIdR(personaId);
      return DatoContactoMapper.toDto(response as DatoContacto);
    } catch (error) {
      handleDbError(error);
    }
  }
}
