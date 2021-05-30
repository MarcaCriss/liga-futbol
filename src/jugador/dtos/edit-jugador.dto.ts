import { PartialType } from '@nestjs/swagger';

import { CreateJugadorDto } from './create-jugador.dto';

export class EditJugadorDto extends PartialType(CreateJugadorDto) {}
