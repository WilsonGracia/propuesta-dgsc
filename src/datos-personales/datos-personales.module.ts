import { Module } from '@nestjs/common';
import { DatosPersonalesController } from './datos-personales.controller';
import { DatosPersonalesService } from './datos-personales.service';

@Module({
  controllers: [DatosPersonalesController],
  providers: [DatosPersonalesService]
})
export class DatosPersonalesModule {}
