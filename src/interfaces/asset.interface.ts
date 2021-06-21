import { Document } from "mongoose";

export interface IAsset extends Document {
    brand: string;
    modelDescription: string;
    type: string;
}