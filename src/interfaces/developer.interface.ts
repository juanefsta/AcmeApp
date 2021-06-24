import { Document, Types } from "mongoose";
import { IAsset } from "./asset.interface";
import { ILicense } from "./license.interface";

export interface IDeveloper extends Document {
  fullname: string;
  active: boolean;
  asset: Types.ObjectId | Record<string, unknown>;
  license: Types.ObjectId | Record<string, unknown>;
}