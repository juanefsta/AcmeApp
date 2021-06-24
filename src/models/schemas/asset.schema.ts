import { Schema, model } from "mongoose";

export const AssetSchema = new Schema({
    brand: String,
    modelDescription: String,
    type: String
});
