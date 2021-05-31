import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Jugador } from './../../jugador/entities';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_equipo: string;

  @Column()
  fundacion: Date;

  @OneToMany(() => Jugador, (jugador) => jugador.equipo)
  jugadores: Jugador[];
}
