import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ExperienciaLaboralService } from './experiencia-laboral.service';
import { JwtAuthGuard } from 'src/login/guards/jwt-auth.guard';
import { UpsertExperienciaLaboralDto } from './dtos/inputs/upsert-experiencia-laboral.dto';
import { UpsertHistorialEmpleoEstadoDto } from './dtos/inputs/upsert-historial-empleo-estado.dto';
import { GetExperienciaLaboralCompletaDto } from './dtos/inputs/get-experiencia-laboral-completa.dto';
import { ShowExperienciaLaboralDto } from './dtos/outputs/show-experiencia-laboral.dto';
import { ShowHistorialEmpleoEstadoDto } from './dtos/outputs/show-historial-empleo-estado.dto';
import { ShowNombramientoEmpleoEstadoDto } from './dtos/outputs/show-nombramiento-empleo-estado.dto';
import { ShowInstitucionGubernamentalDto } from './dtos/outputs/show-institucion-gubernamental.dto';
import { ShowExperienciaLaboralResumenDto } from './dtos/outputs/show-experiencia-laboral-resumen.dto';

@Controller('experiencia-laboral')
export class ExperienciaLaboralController {
  constructor(
    private readonly experienciaLaboralService: ExperienciaLaboralService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/upsert')
  async upsertExperienciaLaboralC(
    @Req() req: Request & { user: { id: string } },
    @Body() dto: UpsertExperienciaLaboralDto,
  ): Promise<void> {
    const usuarioId = req.user.id;
    await this.experienciaLaboralService.upsertExperienciaLaboralS(
      usuarioId,
      dto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('/upsert-historial-estado')
  async upsertHistorialEmpleoEstadoC(
    @Req() req: Request & { user: { id: string } },
    @Body() dto: UpsertHistorialEmpleoEstadoDto,
  ): Promise<void> {
    const usuarioId = req.user.id;
    await this.experienciaLaboralService.upsertHistorialEmpleoEstadoS(
      usuarioId,
      dto,
    );
  }

  @Get('/nombramientos-empleo-estado')
  async obtenerNombramientosEmpleoEstadoC(): Promise<
    ShowNombramientoEmpleoEstadoDto[]
  > {
    return this.experienciaLaboralService.obtenerNombramientosEmpleoEstadoS();
  }

  @Get('/instituciones-gubernamentales')
  async obtenerInstitucionesGubernamentalesC(): Promise<
    ShowInstitucionGubernamentalDto[]
  > {
    return this.experienciaLaboralService.obtenerInstitucionesGubernamentalesS();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/mi-historial-estado')
  async obtenerHistorialEmpleoEstadoC(
    @Req() req: Request & { user: { id: string } },
  ): Promise<ShowHistorialEmpleoEstadoDto[]> {
    const usuarioId = req.user.id;
    return this.experienciaLaboralService.obtenerHistorialEmpleoEstadoS(
      usuarioId,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('/experiencia-completa')
  async obtenerExperienciaLaboralCompletaC(
    @Req() req: Request & { user: { id: string } },
    @Body() dto: GetExperienciaLaboralCompletaDto,
  ): Promise<ShowExperienciaLaboralDto[]> {
    const usuarioId = req.user.id;
    return this.experienciaLaboralService.obtenerExperienciaLaboralCompletaS(
      usuarioId,
      dto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('/mis-experiencias')
  async obtenerExperienciasLaboralesPorPersonaC(
    @Req() req: Request & { user: { id: string } },
  ): Promise<ShowExperienciaLaboralResumenDto[]> {
    const usuarioId = req.user.id;
    return this.experienciaLaboralService.obtenerExperienciasLaboralesPorPersonaS(
      usuarioId,
    );
  }
}
