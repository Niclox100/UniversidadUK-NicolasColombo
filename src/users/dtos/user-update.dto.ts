
import {
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { UserCreationData } from '../users.interface';


export class UserUpdateDTO implements Partial<UserCreationData> {

  @IsString()
  @IsOptional()
  fullname: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsPositive()
  @IsInt()
  age: number;

  constructor({
    fullname,
    email,
    address,
    age,

  }: any = {}) {
    this.fullname = fullname;
    this.email = email;
    this.address = address;
    this.age = age;
  }
}
