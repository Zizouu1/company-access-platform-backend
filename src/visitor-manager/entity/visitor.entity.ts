import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('Visitors')
export class Visitor {
  @Column({ type: 'timestamp' })
  date: Date;

  @PrimaryColumn()
  id: string;

  @Column()
  fullname: string;

  @Column()
  matriculeV: string;

  @Column()
  typeV: string;

  @Column()
  aQui: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
