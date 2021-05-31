import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jugador } from './entities';
import { CreateJugadorDto, EditJugadorDto } from './dtos';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadorRepository: Repository<Jugador>,
  ) {}

  async getAllJugador() {
    return await this.jugadorRepository.find();
  }

  async getJugador(id: number) {
    const jugador = await this.jugadorRepository.findOne(id);
    if (!jugador) throw new NotFoundException('Jugador no existe');
    return jugador;
  }

  async createJugador(createJugadorDto: CreateJugadorDto) {
    const jugador = this.jugadorRepository.create(createJugadorDto);
    return await this.jugadorRepository.save(jugador);
  }

  async updateJugador(id: number, editJugadorDto: EditJugadorDto) {
    const jugador = await this.getJugador(id);
    const jugadorUpdate = Object.assign(jugador, editJugadorDto);
    return await this.jugadorRepository.save(jugadorUpdate);
  }

  async deleteJugador(id: number) {
    return await this.jugadorRepository.delete(id);
  }
}
