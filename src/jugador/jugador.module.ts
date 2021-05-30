import { Module } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { JugadorController } from './jugador.controller';

@Module({
  providers: [JugadorService],
  controllers: [JugadorController]
})
export class JugadorModule {}
