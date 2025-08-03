import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('Employees')
export class Employee {
  @PrimaryColumn()
  id: string;

  @Column()
  fullname: string;

  @Column()
  fonction: string;

  @Column()
  departement: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
