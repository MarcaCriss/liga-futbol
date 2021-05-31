import { CreateEquipoDto } from './dtos/create-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepositoty: Repository<Equipo>,
  ) {}

  async getAllEquipo() {
    return await this.equipoRepositoty.find();
  }

  async getEquipo(id: number) {
    const equipo = await this.equipoRepositoty.findOne(id);
    if (!equipo) throw new NotFoundException('El equipo no existe');
    return equipo;
  }

  async createEquipo(createEquipoDto: CreateEquipoDto) {
    const equipo = this.equipoRepositoty.create(createEquipoDto);
    return await this.equipoRepositoty.save(equipo);
  }
}
