import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from '../../employees/entity/employee.entity';
@Entity('administrators')
export class Administrator {
  @Column({ type: 'date' })
  dateR: string;

  @Column({ type: 'time' })
  time: string;

  @PrimaryColumn()
  idAdmin: string;

  @ManyToOne(() => Employee, (employee) => employee.administratorDelays, {
    eager: true,
  })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
