import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';
import { CreateGeneroDto } from './dtos/inputs/create-genero.dto';
import { CreatePersonaDto } from './dtos/inputs/create-persona.dto';
import { PersonaMapper } from './mappers/persona.mapper';
import { PersonaRepository } from './repositories/persona.repository';
import { handleDbError } from 'src/common/helpers/database-error.helper';
import { UpsertPersonaDto } from './dtos/inputs/upsert-persona.dto';
import { GeneroRepository } from './repositories/genero.repository';
import { ShowGeneroDto } from './dtos/outputs/show-genero.dto';
import { GeneroMapper } from './mappers/genero.mapper';
import { UbicacionRepository } from './repositories/ubicacion.repository';
import { ShowProvinciaDto } from './dtos/outputs/show-provincia.dto';
import { ProvinciaMapper } from './mappers/provincia.mapper';
import { Provincia } from './entities/provincia.entity';
import { ShowDistritoDto } from './dtos/outputs/show-distrito.dto';
import { DistritoMapper } from './mappers/distrito.mapper';
import { Distrito } from './entities/distrito.entity';
import { ShowCantonDto } from './dtos/outputs/show-canton.dto';
import { CantonMapper } from './mappers/canton.mapper';
import { Canton } from './entities/canton.entity';
import { ShowPersonaDatosPersonalesDto } from './dtos/outputs/show-persona-datos.personales.dto';
import { Persona } from './entities/persona.entity';

@Injectable()
export class DatosPersonalesService {
  constructor(
    @InjectRepository(Genero)
    private readonly generoRepo: Repository<Genero>,
    private readonly personaRepository: PersonaRepository,
    private readonly generoRepository: GeneroRepository,
    private readonly ubicacionRepository: UbicacionRepository,
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

  async obtenerGeneros(): Promise<ShowGeneroDto[]> {
    try {
      const result = await this.generoRepository.obtenerGeneros();
      return result.map((row) => GeneroMapper.toDto(row as Genero));
    } catch (error) {
      handleDbError(error);
    }
  }

  //! FUNCIONES PARA TRAER LAS PROVINCIAS, CANTONES Y DISTRITOS

  async obtenerProvinciasS(): Promise<ShowProvinciaDto[]> {
    try {
      const result = await this.ubicacionRepository.obtenerProvinciasR();
      return result.map((row) => ProvinciaMapper.toDto(row as Provincia));
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerDistritosS(c_id: number): Promise<ShowDistritoDto[]> {
    try {
      const result = await this.ubicacionRepository.obtenerDistritosR(c_id);
      return result.map((row) => DistritoMapper.toDto(row as Distrito));
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerCantonesS(p_id: number): Promise<ShowCantonDto[]> {
    try {
      const result = await this.ubicacionRepository.obtenerCantonesR(p_id);
      return result.map((row) => CantonMapper.toDto(row as Canton));
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerUbicacionDIdS(id: string) {
    const result = await this.ubicacionRepository.obtenerUbicacionDId(id);

    if (!result.length) return null;

    const row = result[0];

    const provincia = {
      id: row.p_id_provincia,
      nombre: row.p_nombre_provincia,
    } as Provincia;

    const canton = {
      id: row.p_id_canton,
      nombre: row.p_nombre_canton,
      provincia_id: row.p_id_provincia,
    } as Canton;

    const distrito = {
      id: Number(id),
      nombre: row.p_nombre_distrito,
      canton_id: row.p_id_canton,
    } as unknown as Distrito;

    return {
      provincia: ProvinciaMapper.toDto(provincia),
      canton: CantonMapper.toDto(canton),
      distrito: DistritoMapper.toDto(distrito),
    };
  }

  //! FUNCIONES PARA TRAER LAS PROVINCIAS, CANTONES Y DISTRITOS

  async muestraDatosPersonalesUIdS(
    id: string,
  ): Promise<ShowPersonaDatosPersonalesDto> {
    try {
      const result =
        await this.personaRepository.muestraDatosPersonalesUIdR(id);
      return PersonaMapper.toDtoDatosPersonales(result[0] as Persona);
    } catch (error) {
      handleDbError(error);
    }
  }
}
