import { Controller,Get, Param, Put, Body, Delete } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from '../models/User';
@Controller('users')
export class UsersController {
constructor(private readonly usersService: UserService){}
  @Get()
  getAll(){
    return this.usersService.getAll();
  }
  @Get(':id')
  getOne(@Param() params){
    return this.usersService.getOne(params.id);
  }

  @Put()
  update(@Body() user:User){
    return this.usersService.updateUser(user);
  }
  @Delete(':id')
  deleteUser(@Param() params){
    return this.usersService.deleteUser(params.id);
  }
}
