import { 
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async showAllUsers() {
    const users = await this.usersService.showAll();
    console.log(users);
    return {
      statusCode: HttpStatus.OK,
      message: "Users fetched successfully",
      users
    };
  }
  
  @Post()
  async createUsers(@Body() data: UsersDTO) {
    const user = await this.usersService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User create successfully',
      user
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number){
    const data = await this.usersService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
    await this.usersService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.usersService.destroy(id);
    return{
      statusCode: HttpStatus.OK,
      Message: 'User deleted successfully',
    };
  }
}
