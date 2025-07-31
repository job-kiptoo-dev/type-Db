
import { Document } from 'mongoose';


export interface Itodo extends Document {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
