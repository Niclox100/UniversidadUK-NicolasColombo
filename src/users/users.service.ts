import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Db } from 'mongodb';
import { User } from './users.entity';
import { UserCreationDTO } from './dtos/user-creation.dto';
import { UserUpdateDTO } from './dtos/user-update.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject("MONGO") private database: Db,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  getUsers() {
    return this.userModel.find().exec()

/*     const usersCollection = this.database.collection("users")
    return usersCollection.find().toArray() */
  }

  async getUser(id: string) {
  
    const found = await this.userModel.findById(id).exec()

    if(!found) {
      throw new NotFoundException(`User ${id} not found`)
    }
  }

  create(data: UserCreationDTO) {
    const newUser = new this.userModel(data)
    return newUser.save();
  }

  async update({id, body}: {
    id: string,
    body: UserUpdateDTO
  }) {
    const found = await this.userModel.findByIdAndUpdate(
      id ,
      { $set: body },
      { new: true },
      ).exec();

    if(!found) {
      throw new NotFoundException(`User ${id} not found`)
    }

    return found
  }

  async delete(id: string) {
    const found = await this.userModel.findByIdAndDelete(id).exec()

    if(!found) {
      throw new NotFoundException(`User ${id} not found`)
    }

    return `User ${id} succesfully deleted`
  }
}