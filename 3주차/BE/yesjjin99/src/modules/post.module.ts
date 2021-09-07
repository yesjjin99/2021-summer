import { Module } from '@nestjs/common';
import { PostController } from '../controllers/post.controller';
import { PostService } from '../services/post.service';
import { Posts } from '../entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
