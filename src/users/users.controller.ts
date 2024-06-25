import { Body, Controller, Delete, Get, Param, Post, Patch, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreationDTO } from './dtos/user-creation.dto';
import { UserUpdateDTO } from './dtos/user-update.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserPublicInfoDTO } from './dtos/user-publicInfo-dto';

@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User',
  })
  @Get()
  async getUsers() {
    return await this.usersService.getUsers()
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    required: true,
    description: 'ID',
    example: '667994b46bc9cafbfa08dfc5',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of users',
  })
  @Get(":id")
  async getUser(@Param("id") userId: string) {
    try {
      const user =  await this.usersService.getUser(userId)

      return user
    } catch (e) {
      throw new Error(e)
    }
  }

  @Post()
  async create(@Body() body: UserCreationDTO) {
    try {
      const newUser = await this.usersService.create(body)

      return newUser
    } catch(e) {
      throw new Error(e)
    }
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    required: true,
    description: 'ID',
    example: '667994b46bc9cafbfa08dfc5',
  })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() body: UserUpdateDTO
  ) {
    try {
      const user: UserPublicInfoDTO = await this.usersService.update({
        id,
        body
      })

      return user
    } catch(e) {
      throw new Error(e)
    }
  }

  @ApiParam({
    name: 'id',
    type: 'string',
    required: true,
    description: 'ID',
    example: '667994b46bc9cafbfa08dfc5',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Delete Confirmation',
  })
  @Delete(":id")
  async delete(@Param("id") id: string) {
    try {
      return await this.usersService.delete(id)
    } catch (e){
      throw new Error(e)
    }
  }
}
