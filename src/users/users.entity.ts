import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop({
    required: true
  })
  fullname: string;
  
  @Prop({
    required: true
  })
  email: string;

  @Prop({
    required: true
  })  address: string;

  @Prop({
    required: true,
    type: Number
  })  age: number;

  @Prop({
    required: true
  })
  profession: string;
}

export const UserSchema = SchemaFactory.createForClass(User);