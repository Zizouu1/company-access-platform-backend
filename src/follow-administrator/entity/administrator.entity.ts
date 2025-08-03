import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('administrators')
export class Administrator {
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
