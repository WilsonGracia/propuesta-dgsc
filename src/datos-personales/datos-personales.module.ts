import { Module } from '@nestjs/common';
import { DatosPersonalesController } from './datos-personales.controller';
import { DatosPersonalesService } from './datos-personales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Persona } from './entities/persona.entity';
import { PersonaRepository } from './repositories/persona.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Genero, Persona])],
  controllers: [DatosPersonalesController],
  providers: [DatosPersonalesService, PersonaRepository],
})
export class DatosPersonalesModule {}
