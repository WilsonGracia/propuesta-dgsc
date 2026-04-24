import { BadRequestException, Injectable } from '@nestjs/common';
import { EstudioRepository } from './repositories/estudio.repository';
import { UpsertEstudioDto } from './dtos/inputs/upsert-estudio.dto';
import { GetPorNivelDto } from './dtos/inputs/get-por-nivel.dto';
import { EstudioMapper } from './mappers/estudio.mapper';
import { NivelAcademicoMapper } from './mappers/nivel-academico.mapper';
import { InstitucionAcademicaMapper } from './mappers/institucion-academica.mapper';
import { ShowDocumentoDto } from './dtos/outputs/show-documento.dto';
import { ShowNivelAcademicoDto } from './dtos/outputs/show-nivel-academico.dto';
import { ShowInstitucionAcademicaDto } from './dtos/outputs/show-institucion-academica.dto';
import { handleDbError } from 'src/common/helpers/database-error.helper';
import { DocumentoMapper } from './mappers/documento.mapper';
import { InstitucionAcademica } from './entities/institucion-academica.entity';
import { ShowCarreraDto } from './dtos/outputs/show-carrera.dto';
import { GetCarrerasPorInstitucionDto } from './dtos/inputs/get-carreras-por-institucion.dto';
import { CarreraMapper } from './mappers/carrera.mapper';
import { Carrera } from './entities/carrera.entity';
import { ShowGradoAcademicoDto } from './dtos/outputs/show-grado-academico.dto';
import { GradoAcademicoMapper } from './mappers/grado-academico.mapper';
import { GradoAcademico } from './entities/grado-academico.entity';
import { DatosPersonalesService } from 'src/datos-personales/datos-personales.service';
import { DeleteEstudioDto } from './dtos/inputs/delete-estudio.dto';
import { ShowEstudioResumenDto } from './dtos/outputs/show-estudio-resumen.dto';
import { GetEstudioCompletoDto } from './dtos/inputs/get-estudio-completo.dto';
import { ShowEstudioCompletoDto } from './dtos/outputs/show-estudio-completo.dto';

@Injectable()
export class EstudiosRealizadosService {
  constructor(
    private readonly estudioRepository: EstudioRepository,
    private readonly datosPersonalesService: DatosPersonalesService,
  ) {}

  async upsertEstudioS(
    usuarioId: string,
    dto: UpsertEstudioDto,
  ): Promise<void> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);
    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }
    const params = EstudioMapper.toParams(dto, personaId);
    try {
      await this.estudioRepository.upsertEstudioCompletoR(
        params.estudio_id,
        params.nombre,
        params.fecha_obtencion,
        params.persona_id,
        params.carrera_id,
        params.tipo_documento_id,
        params.documento_id,
        params.grado_academico_id,
        params.registro_id,
        params.tomo,
        params.folio,
        params.asiento,
        params.registro_publico,
      );
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerDocumentosS(): Promise<ShowDocumentoDto[]> {
    try {
      const rows = await this.estudioRepository.obtenerDocumentosR();
      return DocumentoMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerNivelesAcademicosS(): Promise<ShowNivelAcademicoDto[]> {
    try {
      const rows = await this.estudioRepository.obtenerNivelesAcademicosR();
      //console.log(rows);
      return NivelAcademicoMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerInstitucionesPorNivelS(
    dto: GetPorNivelDto,
  ): Promise<ShowInstitucionAcademicaDto[]> {
    try {
      const rows: InstitucionAcademica[] =
        await this.estudioRepository.obtenerInstitucionesPorNivelR(
          dto.nivel_academico_id,
        );

      return InstitucionAcademicaMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  //GetPorInstitucionDto;

  async obtenerCarrerasPorInstitucionS(
    dto: GetCarrerasPorInstitucionDto,
  ): Promise<ShowCarreraDto[]> {
    try {
      const rows: Carrera[] =
        await this.estudioRepository.obtenerCarrerasPorInstitucionR(
          dto.institucion_academica_id,
        );

      return CarreraMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerGradosPorNivelS(
    dto: GetPorNivelDto,
  ): Promise<ShowGradoAcademicoDto[]> {
    try {
      const rows: GradoAcademico[] =
        await this.estudioRepository.obtenerGradosPorNivelR(
          dto.nivel_academico_id,
        );

      return GradoAcademicoMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  //! ELIMINAR EDITAR Y OBTENER ESTUDIOS

  async deleteEstudioS(
    usuarioId: string,
    dto: DeleteEstudioDto,
  ): Promise<void> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);

    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }

    try {
      await this.estudioRepository.deleteEstudioCompletoR(
        dto.estudio_id,
        personaId,
      );
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerEstudiosPorPersonaS(
    usuarioId: string,
  ): Promise<ShowEstudioResumenDto[]> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);

    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }

    try {
      const rows =
        await this.estudioRepository.obtenerEstudiosPorPersonaR(personaId);

      return EstudioMapper.toResumenDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerEstudioCompletoS(
    usuarioId: string,
    dto: GetEstudioCompletoDto,
  ): Promise<ShowEstudioCompletoDto[]> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);

    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }

    try {
      const rows = await this.estudioRepository.obtenerEstudioCompletoR(
        dto.estudio_id,
        dto.tipo_documento_id,
        dto.registro_id,
        personaId,
      );

      return EstudioMapper.toCompletoDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }
}
