import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
