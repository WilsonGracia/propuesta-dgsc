import { Controller, Get, Post, Body } from '@nestjs/common';
import { DatosPersonalesService } from './datos-personales.service';
import { CreatePersonaDto } from './dtos/inputs/create-persona.dto';

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
}
