import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column()
  userId: string;
  // onetomany

  @Column()
  title: string;

  @Column()
  contents: string;
}
