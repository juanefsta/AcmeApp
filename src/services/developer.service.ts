import { IAsset } from "../interfaces/asset.interface";
import { IDeveloper } from "../interfaces/developer.interface";
import { AssetModel } from "../models/asset.model";
import { DeveloperModel } from "../models/developer.model";

export class DeveloperService {

  public getAll(): Promise<IAsset[]> {
    return AssetModel.find({}).exec();
  }

}