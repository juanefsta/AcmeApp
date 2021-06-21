import { Schema, model } from "mongoose";
import { ILicense } from "../interfaces/license.interface";
const LicenseSchema = new Schema({
    software: {
        type: String,
        required: true,
        trim: true
    }
});

export const LicenseModel = model<ILicense>('License', LicenseSchema);