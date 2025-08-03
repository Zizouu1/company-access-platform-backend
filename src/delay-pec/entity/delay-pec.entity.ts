import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('delay-pec')
export class Delay {
  @Column({ type: 'date' })
  dateR: string;

  @Column({ type: 'time' })
  time: string;

  @PrimaryColumn()
  id: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  site: string;

  @Column()
  service: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
