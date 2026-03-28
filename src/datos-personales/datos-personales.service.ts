import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';
import { CreateGeneroDto } from './dtos/inputs/create-genero.dto';
import { CreatePersonaDto } from './dtos/inputs/create-persona.dto';
import { PersonaMapper } from './mappers/persona.mapper';
import { PersonaRepository } from './repositories/persona.repository';
import { handleDbError } from 'src/common/helpers/database-error.helper';
import { UpsertPersonaDto } from './dtos/inputs/upsert-persona.dto';

@Injectable()
export class DatosPersonalesService {
  constructor(
    @InjectRepository(Genero)
    private readonly generoRepo: Repository<Genero>,
    private readonly personaRepository: PersonaRepository,
  ) {}

  createGenero(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    const genero: Genero = new Genero();

    genero.id = createGeneroDto.id;
    genero.nombre = createGeneroDto.nombre;

    return this.generoRepo.save(genero);
  }

  findAll(): Promise<Genero[]> {
    return this.generoRepo.find();
  }

  //! PERSONA CRUD

  async insertar(dto: CreatePersonaDto): Promise<void> {
    const entity = PersonaMapper.toEntity(dto);
    try {
      await this.personaRepository.insertar(entity);
    } catch (error) {
      handleDbError(error);
    }
  }

  async upsertPersonaS(dto: UpsertPersonaDto): Promise<void> {
    try {
      await this.personaRepository.upsertPersonaR(dto);
    } catch (error) {
      handleDbError(error);
    }
  }
}
