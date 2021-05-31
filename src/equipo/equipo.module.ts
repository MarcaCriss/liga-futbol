import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { EquipoService } from './equipo.service';
import { EquipoController } from './equipo.controller';
import { Equipo } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Equipo])],
  providers: [EquipoService],
  controllers: [EquipoController],
})
export class EquipoModule {}
