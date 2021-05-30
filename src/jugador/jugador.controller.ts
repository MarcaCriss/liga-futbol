import { CreateJugadorDto } from './dtos/create-jugador.dto';
import { JugadorService } from './jugador.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EditJugadorDto } from './dtos';

@Controller('jugador')
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}

  @Get()
  async getAllJugador() {
    return await this.jugadorService.getAllJugador();
  }

  @Get(':id')
  async getJugador(@Param('id') id: number) {
    return await this.jugadorService.getJugador(id);
  }

  @Post('create')
  async createJugador(@Body() createJugadorDto: CreateJugadorDto) {
    return await this.jugadorService.createJugador(createJugadorDto);
  }

  @Put(':id')
  async updateJugador(
    @Param('id') id: number,
    @Body() editJugadorDto: EditJugadorDto,
  ) {
    return await this.jugadorService.updateJugador(id, editJugadorDto);
  }

  @Delete(':id')
  async deleteJugador(@Param('id') id: number) {
    return await this.jugadorService.deleteJugador(id);
  }
}
