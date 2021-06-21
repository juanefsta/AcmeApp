import { Document } from "mongoose";

export interface ILicense extends Document {
    software: string;
}