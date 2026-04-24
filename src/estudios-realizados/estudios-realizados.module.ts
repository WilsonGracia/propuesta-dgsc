import { Module } from '@nestjs/common';
import { EstudiosRealizadosService } from './estudios-realizados.service';
import { EstudiosRealizadosController } from './estudios-realizados.controller';
import { EstudioRepository } from './repositories/estudio.repository';
import { DatosPersonalesModule } from 'src/datos-personales/datos-personales.module';

@Module({
  imports: [DatosPersonalesModule],
  providers: [EstudiosRealizadosService, EstudioRepository],
  controllers: [EstudiosRealizadosController],
})
export class EstudiosRealizadosModule {}
