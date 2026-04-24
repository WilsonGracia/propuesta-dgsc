import { Module } from '@nestjs/common';
import { ExperienciaLaboralService } from './experiencia-laboral.service';
import { ExperienciaLaboralController } from './experiencia-laboral.controller';
import { ExperienciaLaboralRepository } from './repositories/experiencia-laboral.repository';
import { DatosPersonalesModule } from 'src/datos-personales/datos-personales.module';

@Module({
  imports: [DatosPersonalesModule],
  providers: [ExperienciaLaboralService, ExperienciaLaboralRepository],
  controllers: [ExperienciaLaboralController],
})
export class ExperienciaLaboralModule {}
