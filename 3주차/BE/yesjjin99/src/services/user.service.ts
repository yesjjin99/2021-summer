import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(Users)
  private readonly userRepository: Repository<Users>;

  async findAll(): Promise<Users[]> {
    return await this.userRepository.find();
  }

  async findOne(userId: string): Promise<Users> {
    return await this.userRepository.findOne(userId);
  }

  async createUser(user: Users) {
    const newuser = new Users();
    newuser.userId = user.userId;
    newuser.userName = user.userName;

    await this.userRepository.save(newuser);
  }

  async editUser(userId: string, user: Users): Promise<Users> {
    const eduser = await this.userRepository.findOne(userId);
    if (eduser) {
      eduser.userName = user.userName;

      return await this.userRepository.save(eduser);
    } else {
      throw new NotFoundException('해당 회원이 존재하지 않습니다.');
    }
  }

  async removeUser(userId: string) {
    await this.userRepository.delete(userId);
  }
}
