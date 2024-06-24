
import {
  IsDefined,
  IsEmail,
  IsInt,
  IsPositive,
  IsString,
} from 'class-validator';
import { UserCreationData } from '../users.interface';


export class UserCreationDTO implements UserCreationData {

  @IsString()
  @IsDefined()
  fullname: string;

  @IsEmail()
  @IsDefined()
  email: string;

  @IsDefined()
  @IsString()
  address: string;

  @IsDefined()
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
