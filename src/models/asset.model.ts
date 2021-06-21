import { Schema, model } from "mongoose";
import { IAsset } from "../interfaces/asset.interface";
const AssetSchema = new Schema({
    brand: {
        type: String,
        required: true,
        trim: true
    },
    modelDescription: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    }
});

export const AssetModel = model<IAsset>('Asset', AssetSchema);