import {
  Body,
  Controller,
  Post,
  UseGuards,
  Req,
  BadRequestException,
} from '@nestjs/common';
import type { Request } from 'express';
import { DatosLocalizacionService } from './datos-localizacion.service';
import { UpsertDatoContactoDto } from './dtos/inputs/upsert-dato_contacto.dto';
import { ShowDatoContactoDto } from './dtos/outputs/show-dato_contacto.dto';
import { JwtAuthGuard } from '../login/guards/jwt-auth.guard';

@Controller('datos-localizacion')
export class DatosLocalizacionController {
  constructor(private readonly datosLocalizacionS: DatosLocalizacionService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/upsertDatosContacto')
  async upsertDatoContactoC(
    @Req() req: Request,
    @Body() dto: UpsertDatoContactoDto,
  ): Promise<void> {
    const usuarioId = (req.user as { id: string }).id;
    await this.datosLocalizacionS.upsertDatoContactoR(usuarioId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/obtener-datos-contacto')
  async obtenerDatoContactoPorPersonaIdS(
    @Req() req: Request,
  ): Promise<ShowDatoContactoDto> {
    const personaId = (req.user as { id: string }).id;
    return await this.datosLocalizacionS.obtenerDatoContactoPorPersonaIdS(
      personaId,
    );
  }
}
