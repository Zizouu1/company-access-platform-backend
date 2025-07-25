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
  id: number;

  @Column({ unique: true })
  fullname: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  fonction: string;

  @Column()
  departement: string;
}
