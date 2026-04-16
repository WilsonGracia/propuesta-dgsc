import { Body, Controller, Post } from '@nestjs/common';
import { DatosLocalizacionService } from './datos-localizacion.service';
import { UpsertDatoContactoDto } from './dtos/inputs/upsert-dato_contacto.dto';

@Controller('datos-localizacion')
export class DatosLocalizacionController {
  constructor(private readonly datosLocalizacionS: DatosLocalizacionService) {}

  @Post('/upsertDatosContacto')
  async upsertDatoContactoC(@Body() dto: UpsertDatoContactoDto): Promise<void> {
    await this.datosLocalizacionS.upsertDatoContactoR(dto);
  }
}
