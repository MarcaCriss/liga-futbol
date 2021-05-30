import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsInt } from 'class-validator';

export class CreateJugadorDto {
  @ApiProperty()
  @IsString({ message: 'El nombre es requerido' })
  nombre: string;

  @ApiProperty()
  @IsString({ message: 'El apellido paterno es requerido' })
  apellido_paterno: string;

  @ApiProperty()
  @IsString({ message: 'El apellido materno es requerido' })
  apellido_materno: string;

  @ApiProperty()
  @IsDateString()
  fecha_nacimiento: Date;

  @ApiProperty()
  @IsString({ message: 'El lugar de nacimiento es requerido' })
  lugar_nacimiento: string;

  @ApiProperty()
  @IsInt({ message: 'El tamaño es requerido' })
  tamaño: number;

  @ApiProperty()
  @IsInt({ message: 'El peso es requerido' })
  peso: number;
}
