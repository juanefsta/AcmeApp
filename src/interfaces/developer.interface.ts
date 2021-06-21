import { Document } from "mongoose";

export interface IDeveloper extends Document {
  fullname: string;
  active: boolean;
}