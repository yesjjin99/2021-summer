import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  userId: string;
  // onetomany

  @Column()
  userName: string;

  @CreateDateColumn()
  created: Date;
}
