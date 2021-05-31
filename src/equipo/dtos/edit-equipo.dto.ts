import { PartialType } from '@nestjs/swagger';

import { CreateEquipoDto } from './create-equipo.dto';

export class EditEquipoDto extends PartialType(CreateEquipoDto) {}
