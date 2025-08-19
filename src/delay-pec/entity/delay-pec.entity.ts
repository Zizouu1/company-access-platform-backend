import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from '../../employees/entity/employee.entity';
@Entity('delay-pec')
export class Delay {
  @Column({ type: 'date' })
  dateR: string;

  @Column({
    type: 'time',
    transformer: {
      to: (value: string) => value,
      from: (value: string) => value,
    },
  })
  time: string;

  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Employee, (employee) => employee.administratorDelays, {
    eager: true,
  })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column()
  service: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
