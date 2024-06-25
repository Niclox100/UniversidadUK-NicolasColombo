
import {
  IsDefined,
  IsEmail,
  IsInt,
  IsPositive,
  IsString,
} from 'class-validator';
import { UserCreationData } from '../users.interface';
import { ApiProperty } from '@nestjs/swagger';


export class UserPublicInfoDTO implements UserCreationData {

  @ApiProperty({ required: true, default: 'Nicolás Colombo' })
  @IsString()
  @IsDefined()
  fullname: string;

  @ApiProperty({ required: true, default: 'random@gmail.com' })
  @IsEmail()
  @IsDefined()
  email: string;

  @ApiProperty({ required: true, default: 'Street 123' })
  @IsDefined()
  @IsString()
  address: string;

  @ApiProperty({ required: true, default: '22' })
  @IsDefined()
  @IsPositive()
  @IsInt()
  age: number;

  @ApiProperty({ required: true, default: 'Software Developer' })
  @IsDefined()
  @IsString()
  profession: string;

  constructor({
    fullname,
    email,
    address,
    age,
    profession
  }: any = {}) {
    this.fullname = fullname;
    this.email = email;
    this.address = address;
    this.age = age;
    this.profession = profession
  }
}
