import { Module } from '@nestjs/common';
import { DatosLocalizacionService } from './datos-localizacion.service';
import { DatosLocalizacionController } from './datos-localizacion.controller';
import { DatoContactoRepository } from './repositories/dato_contacto.repository';

@Module({
  providers: [DatosLocalizacionService, DatoContactoRepository],
  controllers: [DatosLocalizacionController],
})
export class DatosLocalizacionModule {}
