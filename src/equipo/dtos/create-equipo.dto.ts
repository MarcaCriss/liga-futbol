import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString } from 'class-validator';

export class CreateEquipoDto {
  @ApiProperty()
  @IsString()
  nombre_equipo: string;

  @ApiProperty()
  @IsDateString()
  fundacion: Date;
}
