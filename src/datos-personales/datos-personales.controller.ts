import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { DatosPersonalesService } from './datos-personales.service';
import { CreatePersonaDto } from './dtos/inputs/create-persona.dto';
import { UpsertPersonaDto } from './dtos/inputs/upsert-persona.dto';
import { ShowGeneroDto } from './dtos/outputs/show-genero.dto';
import { Provincia } from './entities/provincia.entity';
import { ShowDistritoDto } from './dtos/outputs/show-distrito.dto';
import { ShowCantonDto } from './dtos/outputs/show-canton.dto';
import { ShowPersonaDatosPersonalesDto } from './dtos/outputs/show-persona-datos.personales.dto';
import { ShowProvinciaDto } from './dtos/outputs/show-provincia.dto';
import { JwtAuthGuard } from '../login/guards/jwt-auth.guard';

@Controller('datos-personales')
export class DatosPersonalesController {
  constructor(private readonly dpService: DatosPersonalesService) {}

  @Get('encontrar')
  findAll() {
    return this.dpService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('insertar')
  async insertar(@Body() dto: CreatePersonaDto): Promise<void> {
    await this.dpService.insertar(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('upsert')
  async upserPersonaC(@Body() dto: UpsertPersonaDto): Promise<void> {
    await this.dpService.upsertPersonaS(dto);
  }

  @Get('/generos')
  async obtenerGenerosC(): Promise<ShowGeneroDto[]> {
    return await this.dpService.obtenerGeneros();
  }

  @Get('/obtenerProvincias')
  async obtenerProvinciasC(): Promise<Provincia[]> {
    //! se ocupa adaptar esto para que retorne un dto de provicia como en canton o distrito
    return await this.dpService.obtenerProvinciasS();
  }

  @Get('/obtenerCantones')
  async obtenerCantonesC(
    @Query('p_id') p_id: number,
  ): Promise<ShowCantonDto[]> {
    return await this.dpService.obtenerCantonesS(p_id);
  }

  @Get('/obtenerDistritos')
  async obtenerDistritosC(
    @Query('c_id') c_id: number,
  ): Promise<ShowDistritoDto[]> {
    return await this.dpService.obtenerDistritosS(c_id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/obtenerDatosPersonales')
  async muestraDatosPersonalesUIdC(
    @Req() req: Request,
  ): Promise<ShowPersonaDatosPersonalesDto> {
    const id = (req.user as { id: string }).id;
    return await this.dpService.muestraDatosPersonalesUIdS(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/ubicacion')
  async obtenerUbicacionDIdC(@Req() req: Request): Promise<{
    provincia: ShowProvinciaDto;
    canton: ShowCantonDto;
    distrito: ShowDistritoDto;
  } | null> {
    const id = (req.user as { id: string }).id;
    return this.dpService.obtenerUbicacionDIdS(id);
  }
}
