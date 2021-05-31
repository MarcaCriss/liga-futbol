import { CreateEquipoDto } from './dtos/create-equipo.dto';
import { EquipoService } from './equipo.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Get()
  async getAllEquipo() {
    return await this.equipoService.getAllEquipo();
  }

  @Get(':id')
  async getEquipo(@Param('id') id: number) {
    return await this.equipoService.getEquipo(id);
  }

  @Post()
  async createEquipo(@Body() createEquipoDto: CreateEquipoDto) {
    return await this.equipoService.createEquipo(createEquipoDto);
  }
}
