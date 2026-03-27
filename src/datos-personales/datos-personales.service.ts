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
      const code = error?.driverError?.code; //! captura el codigo lanzado DESDE LA BD (ver procedimiento)
      const msg = error?.driverError?.message ?? error?.message; //! lo mismo con el msg y si no tira el nest

      switch (
        code //! dependiendo del codigo lanzado por la BD, se lanza una excepcion diferente
      ) {
        case '23505': //! unique_violation
          throw new ConflictException(msg);
        case '23514': //! check_violation
          throw new BadRequestException(msg);
        case '23503': //! foreign_key_violation
          throw new BadRequestException(msg);
        default:
          throw new InternalServerErrorException(msg);
      }
    }
  }
}
