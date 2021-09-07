import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Users } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') userId: string): Promise<Users> {
    return await this.userService.findOne(userId);
  }

  @Post()
  async createUser(@Body() user: Users) {
    return await this.userService.createUser(user);
  }

  @Put(':id')
  async editUser(
    @Param('id') userId: string,
    @Body() user: Users,
  ): Promise<Users> {
    return await this.userService.editUser(userId, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    this.userService.removeUser(userId);
  }
}
