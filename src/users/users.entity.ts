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

  @Prop()
  address: string;

  @Prop({ type: Number})
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);