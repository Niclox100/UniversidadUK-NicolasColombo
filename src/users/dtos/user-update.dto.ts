
import {
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { UserCreationData } from '../users.interface';
import { ApiProperty } from '@nestjs/swagger';


export class UserUpdateDTO implements Partial<UserCreationData> {

  @ApiProperty({ required: true, default: 'Nicolás Colombo' })
  @IsString()
  @IsOptional()
  @Length(4, 70)
  fullname?: string;

  @ApiProperty({ required: true, default: 'random@gmail.com' })
  @IsEmail()
  @IsOptional()
  @MaxLength(100)
  email?: string;

  @ApiProperty({ required: true, default: 'Street 123' })
  @IsOptional()
  @IsString()
  @Length(4, 70)
  address?: string;

  @ApiProperty({ required: true, default: '22' })
  @IsOptional()
  @IsPositive()
  @IsInt()
  age?: number;

  @ApiProperty({ required: true, default: 'Software Developer' })
  @IsOptional()
  @IsString()
  profession?: string;

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
