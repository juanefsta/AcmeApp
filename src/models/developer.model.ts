import { Schema, model } from "mongoose";
import { IDeveloper } from "../interfaces/developer.interface";
import { AssetSchema } from "./schemas/asset.schema";
import { LicenseSchema } from "./schemas/license.schema";


const DeveloperSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    asset: {
        type: AssetSchema
    },
    license: {
        type: LicenseSchema
    }
});

export const DeveloperModel = model<IDeveloper>('Developer', DeveloperSchema);