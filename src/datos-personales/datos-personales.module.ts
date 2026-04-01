import { Module } from '@nestjs/common';
import { DatosPersonalesController } from './datos-personales.controller';
import { DatosPersonalesService } from './datos-personales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Persona } from './entities/persona.entity';
import { PersonaRepository } from './repositories/persona.repository';
import { GeneroRepository } from './repositories/genero.repository';
import { UbicacionRepository } from './repositories/ubicacion.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Genero, Persona])],
  controllers: [DatosPersonalesController],
  providers: [
    DatosPersonalesService,
    PersonaRepository,
    GeneroRepository,
    UbicacionRepository,
  ],
})
export class DatosPersonalesModule {}
