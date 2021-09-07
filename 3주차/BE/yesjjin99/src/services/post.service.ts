import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../entities/post.entity';

@Injectable()
export class PostService {
  @InjectRepository(Posts)
  private readonly postRepository: Repository<Posts>;

  async findAll(): Promise<Posts[]> {
    return await this.postRepository.find();
  }

  async findOne(postId: number): Promise<Posts> {
    return await this.postRepository.findOne(postId);
  }

  async createPost(post: Posts) {
    const newpost = new Posts();
    newpost.userId = post.userId;
    newpost.title = post.title;
    newpost.contents = post.contents;

    await this.postRepository.save(newpost);
  }

  async editPost(postId: number, post: Posts): Promise<Posts> {
    const edpost = await this.postRepository.findOne(postId);
    if (edpost) {
      edpost.title = post.title;
      edpost.contents = post.contents;

      return await this.postRepository.save(edpost);
    } else {
      throw new NotFoundException('게시물이 존재하지 않습니다.');
    }
  }

  async removePost(postId: number) {
    await this.postRepository.delete(postId);
  }
}
