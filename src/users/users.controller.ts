import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreationDTO } from './dtos/user-creation.dto';
import { UserUpdateDTO } from './dtos/user-update.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

  @Get()
  async getUsers() {
    return await this.usersService.getUsers()
  }

  @Get(":id")
  async getUser(@Param("id") userId: string) {
    return await this.usersService.getUser(userId)
  }

  @Post()
  async create(@Body() body: UserCreationDTO) {
    return await this.usersService.create(body)
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() body: UserUpdateDTO
  ) {
    return this.usersService.update({
      id,
      body
    })
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return await this.usersService.delete(id)
  }
}
