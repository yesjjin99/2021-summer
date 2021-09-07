import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsEntity } from './posts.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
