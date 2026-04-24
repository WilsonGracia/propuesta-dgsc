import { Module } from '@nestjs/common';
import { DatosLocalizacionService } from './datos-localizacion.service';
import { DatosLocalizacionController } from './datos-localizacion.controller';
import { DatoContactoRepository } from './repositories/dato_contacto.repository';
import { DatosPersonalesModule } from 'src/datos-personales/datos-personales.module';

@Module({
  imports: [DatosPersonalesModule],
  providers: [DatosLocalizacionService, DatoContactoRepository],
  controllers: [DatosLocalizacionController],
})
export class DatosLocalizacionModule {}
