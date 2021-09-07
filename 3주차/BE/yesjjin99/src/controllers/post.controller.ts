import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Posts } from 'src/entities/post.entity';
import { PostService } from '../services/post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') postId: number): Promise<Posts> {
    return await this.postService.findOne(postId);
  }

  @Post()
  async createPost(@Body() post: Posts) {
    return await this.postService.createPost(post);
  }

  @Put(':id')
  async editPost(
    @Param('id') postId: number,
    @Body() post: Posts,
  ): Promise<Posts> {
    return await this.postService.editPost(postId, post);
  }

  @Delete(':id')
  deletePost(@Param('id') postId: number) {
    this.postService.removePost(postId);
  }
}
