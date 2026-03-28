import { Controller, Get, Post, Body } from '@nestjs/common';
import { DatosPersonalesService } from './datos-personales.service';
import { CreatePersonaDto } from './dtos/inputs/create-persona.dto';
import { UpsertPersonaDto } from './dtos/inputs/upsert-persona.dto';

@Controller('datos-personales')
export class DatosPersonalesController {
  constructor(private readonly dpService: DatosPersonalesService) {}

  @Get('encontrar')
  findAll() {
    return this.dpService.findAll();
  }

  @Post('insertar')
  async insertar(@Body() dto: CreatePersonaDto): Promise<void> {
    await this.dpService.insertar(dto);
  }

  @Post('upsert')
  async upserPersonaC(@Body() dto: UpsertPersonaDto): Promise<void> {
    await this.dpService.upsertPersonaS(dto);
  }
}
