import { model, Schema } from "mongoose";
import { Itodo } from "../types/type.ts";
console.log("hello world");

const todoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

}, { timestamps: true });


export default model<Itodo>("Todo", todoSchema)
