import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Equipo } from './../../equipo/entities';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  nombre: string;

  @Column('varchar')
  apellido_paterno: string;

  @Column('varchar')
  apellido_materno: string;

  @Column('date')
  fecha_nacimiento: Date;

  @Column('varchar')
  lugar_nacimiento: string;

  @Column('double')
  tamaño: number;

  @Column('double')
  peso: number;

  @ManyToOne(() => Equipo, (equipo) => equipo.jugadores)
  equipo: Equipo;
}
