import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { JugadorService } from './jugador.service';
import { JugadorController } from './jugador.controller';
import { Jugador } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador])],
  providers: [JugadorService],
  controllers: [JugadorController],
})
export class JugadorModule {}
