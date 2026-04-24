import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { EstudiosRealizadosService } from './estudios-realizados.service';
import { UpsertEstudioDto } from './dtos/inputs/upsert-estudio.dto';
import { GetPorNivelDto } from './dtos/inputs/get-por-nivel.dto';
import { ShowDocumentoDto } from './dtos/outputs/show-documento.dto';
import { ShowNivelAcademicoDto } from './dtos/outputs/show-nivel-academico.dto';
import { ShowInstitucionAcademicaDto } from './dtos/outputs/show-institucion-academica.dto';
import { ShowCarreraDto } from './dtos/outputs/show-carrera.dto';
import { ShowGradoAcademicoDto } from './dtos/outputs/show-grado-academico.dto';
import { GetCarrerasPorInstitucionDto } from './dtos/inputs/get-carreras-por-institucion.dto';
import { JwtAuthGuard } from 'src/login/guards/jwt-auth.guard';
import { DeleteEstudioDto } from './dtos/inputs/delete-estudio.dto';
import { ShowEstudioResumenDto } from './dtos/outputs/show-estudio-resumen.dto';
import { GetEstudioCompletoDto } from './dtos/inputs/get-estudio-completo.dto';
import { ShowEstudioCompletoDto } from './dtos/outputs/show-estudio-completo.dto';

@Controller('estudio')
export class EstudiosRealizadosController {
  constructor(private readonly estudioService: EstudiosRealizadosService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/upsert')
  async upsertEstudioC(
    @Req() req: Request & { user: { id: string } },
    @Body() dto: UpsertEstudioDto,
  ): Promise<void> {
    const usuarioId = req.user.id;
    await this.estudioService.upsertEstudioS(usuarioId, dto);
  }

  @Get('/documentos-academicos') // titulo o certificado NADA CONFIDENCIAL
  async obtenerDocumentosC(): Promise<ShowDocumentoDto[]> {
    return this.estudioService.obtenerDocumentosS();
  }

  @Post('/niveles-academicos')
  async obtenerNivelesAcademicosC(): Promise<ShowNivelAcademicoDto[]> {
    return this.estudioService.obtenerNivelesAcademicosS();
  }

  @Post('/instituciones-academicas')
  async obtenerInstitucionesPorNivelC(
    @Body() dto: GetPorNivelDto,
  ): Promise<ShowInstitucionAcademicaDto[]> {
    return this.estudioService.obtenerInstitucionesPorNivelS(dto);
  }

  @Post('/carreras-institucion')
  async obtenerCarrerasPorInstitucionC(
    @Body() dto: GetCarrerasPorInstitucionDto,
  ): Promise<ShowCarreraDto[]> {
    return this.estudioService.obtenerCarrerasPorInstitucionS(dto);
  }

  @Post('/grados-academicos')
  async obtenerGradosPorNivelC(
    @Body() dto: GetPorNivelDto,
  ): Promise<ShowGradoAcademicoDto[]> {
    return this.estudioService.obtenerGradosPorNivelS(dto);
  }

  // ! eliminar editar y obtener estudio

  @UseGuards(JwtAuthGuard)
  @Post('/delete')
  async deleteEstudioC(
    @Req() req: Request & { user: { id: string } },
    @Body() dto: DeleteEstudioDto,
  ): Promise<void> {
    const usuarioId = req.user.id;
    await this.estudioService.deleteEstudioS(usuarioId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/mis-estudios')
  async obtenerEstudiosPorPersonaC(
    @Req() req: Request & { user: { id: string } },
  ): Promise<ShowEstudioResumenDto[]> {
    const usuarioId = req.user.id;
    return this.estudioService.obtenerEstudiosPorPersonaS(usuarioId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/estudio-completo')
  async obtenerEstudioCompletoC(
    @Req() req: Request & { user: { id: string } },
    @Body() dto: GetEstudioCompletoDto,
  ): Promise<ShowEstudioCompletoDto[]> {
    const usuarioId = req.user.id;
    return this.estudioService.obtenerEstudioCompletoS(usuarioId, dto);
  }
}
