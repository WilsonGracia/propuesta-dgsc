import { BadRequestException, Injectable } from '@nestjs/common';
import { ExperienciaLaboralRepository } from './repositories/experiencia-laboral.repository';
import { UpsertExperienciaLaboralDto } from './dtos/inputs/upsert-experiencia-laboral.dto';
import { UpsertHistorialEmpleoEstadoDto } from './dtos/inputs/upsert-historial-empleo-estado.dto';
import { GetExperienciaLaboralCompletaDto } from './dtos/inputs/get-experiencia-laboral-completa.dto';
import { ExperienciaLaboralMapper } from './mappers/experiencia-laboral.mapper';
import { HistorialEmpleoEstadoMapper } from './mappers/historial-empleo-estado.mapper';
import { NombramientoEmpleoEstadoMapper } from './mappers/nombramiento-empleo-estado.mapper';
import { InstitucionGubernamentalMapper } from './mappers/institucion-gubernamental.mapper';
import { ShowExperienciaLaboralDto } from './dtos/outputs/show-experiencia-laboral.dto';
import { ShowHistorialEmpleoEstadoDto } from './dtos/outputs/show-historial-empleo-estado.dto';
import { ShowNombramientoEmpleoEstadoDto } from './dtos/outputs/show-nombramiento-empleo-estado.dto';
import { ShowInstitucionGubernamentalDto } from './dtos/outputs/show-institucion-gubernamental.dto';
import { handleDbError } from 'src/common/helpers/database-error.helper';
import { DatosPersonalesService } from 'src/datos-personales/datos-personales.service';
import { ShowExperienciaLaboralResumenDto } from './dtos/outputs/show-experiencia-laboral-resumen.dto';

@Injectable()
export class ExperienciaLaboralService {
  constructor(
    private readonly experienciaLaboralRepository: ExperienciaLaboralRepository,
    private readonly datosPersonalesService: DatosPersonalesService,
  ) {}

  async upsertExperienciaLaboralS(
    usuarioId: string,
    dto: UpsertExperienciaLaboralDto,
  ): Promise<void> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);
    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }
    const params = ExperienciaLaboralMapper.toParams(dto, personaId);
    try {
      await this.experienciaLaboralRepository.upsertExperienciaLaboralR(
        params.experiencia_laboral_id,
        params.nombre_organizacion,
        params.puesto_persona,
        params.fecha_ingreso,
        params.fecha_salida,
        params.actual,
        params.funcion,
        params.persona_id,
        params.tipo_organizacion_id,
        params.puesto_id,
        params.total_meses,
      );
    } catch (error) {
      handleDbError(error);
    }
  }

  async upsertHistorialEmpleoEstadoS(
    usuarioId: string,
    dto: UpsertHistorialEmpleoEstadoDto,
  ): Promise<void> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);
    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }
    try {
      await this.experienciaLaboralRepository.upsertHistorialEmpleoEstadoR(
        dto.historial_empleo_estado_id ?? null,
        dto.empleo ?? false,
        personaId,
        dto.nombramiento_empleo_estado_id ?? null,
        dto.institucion_gubernamental_id ?? null,
      );
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerNombramientosEmpleoEstadoS(): Promise<
    ShowNombramientoEmpleoEstadoDto[]
  > {
    try {
      const rows =
        await this.experienciaLaboralRepository.obtenerNombramientosEmpleoEstadoR();
      return NombramientoEmpleoEstadoMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerInstitucionesGubernamentalesS(): Promise<
    ShowInstitucionGubernamentalDto[]
  > {
    try {
      const rows =
        await this.experienciaLaboralRepository.obtenerInstitucionesGubernamentalesR();
      return InstitucionGubernamentalMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerHistorialEmpleoEstadoS(
    usuarioId: string,
  ): Promise<ShowHistorialEmpleoEstadoDto[]> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);
    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }
    try {
      const rows =
        await this.experienciaLaboralRepository.obtenerHistorialEmpleoEstadoR(
          personaId,
        );
      return HistorialEmpleoEstadoMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerExperienciaLaboralCompletaS(
    usuarioId: string,
    dto: GetExperienciaLaboralCompletaDto,
  ): Promise<ShowExperienciaLaboralDto[]> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);
    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }
    try {
      const rows =
        await this.experienciaLaboralRepository.obtenerExperienciaLaboralCompletaR(
          personaId,
          dto.experiencia_laboral_id,
        );
      return ExperienciaLaboralMapper.toDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }

  async obtenerExperienciasLaboralesPorPersonaS(
    usuarioId: string,
  ): Promise<ShowExperienciaLaboralResumenDto[]> {
    const personaId =
      await this.datosPersonalesService.obtenerPersonaIdPorUsuarioId(usuarioId);
    if (!personaId) {
      throw new BadRequestException(
        'No existe una persona asociada a este usuario',
      );
    }
    try {
      const rows =
        await this.experienciaLaboralRepository.obtenerExperienciasLaboralesPorPersonaR(
          personaId,
        );
      return ExperienciaLaboralMapper.toResumenDtoList(rows);
    } catch (error) {
      handleDbError(error);
    }
  }
}
