import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Delay } from '../../delay-pec/entity/delay-pec.entity';
import { Administrator } from '../../follow-administrator/entity/administrator.entity';
@Entity('Employees')
export class Employee {
  @PrimaryColumn()
  id: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  site: string;

  @OneToMany(() => Delay, (delay) => delay.employee)
  delays: Delay[];

  @OneToMany(() => Administrator, (admin) => admin.employee)
  administratorDelays: Administrator[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
