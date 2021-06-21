import { Schema, model } from "mongoose";
import { IDeveloper } from "../interfaces/developer.interface";
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
    }
});

export const DeveloperModel = model<IDeveloper>('Developer', DeveloperSchema);