import { ObjectId } from "mongoose";
import { IAsset } from "../interfaces/asset.interface";
import { IDeveloper } from "../interfaces/developer.interface";
import { ILicense } from "../interfaces/license.interface";
import { AssetModel } from "../models/asset.model";
import { DeveloperModel } from "../models/developer.model";
import { LicenseModel } from "../models/license.model";
var ObjectId = require('mongoose').Types.ObjectId;

export class DeveloperService {

  public getAll(): Promise<IDeveloper[]> {
    return DeveloperModel.find({}).exec();
  }

  public getLicenses(): Promise<ILicense[]> {
    return LicenseModel.find({}).exec();
  }

  public getAssets(): Promise<IAsset[]> {
    return AssetModel.find({}).exec();
  }

  public add(dev: IDeveloper): Promise<IDeveloper> {
    const newDev = new DeveloperModel(dev);
    return newDev.save();
  }

  public edit(dev: IDeveloper): Promise<IDeveloper | null> {
    const newDev = new DeveloperModel(dev);
    const updated = DeveloperModel.findByIdAndUpdate(newDev._id, { $set: dev}, {new: true});
    return updated.exec();
  }

  public disable(id: ObjectId): Promise<IDeveloper | null> {
    const dev = DeveloperModel.findByIdAndUpdate(id, {$set: {asset: undefined, license: undefined}}, {new: true});
    return dev.exec();
  }

  public async addAsset(devId: ObjectId, assetId:ObjectId): Promise<IDeveloper | null> {
    const asset = await AssetModel.findById(assetId).exec();
    const dev = DeveloperModel.findByIdAndUpdate(devId, {$set: {asset: asset}}, {new: true});
    return dev.exec();
  }
  
  public async deleteAsset(id: string): Promise<IDeveloper | null>{
    const dev = DeveloperModel.findByIdAndUpdate(id, {$set: {asset: undefined}}, {new: true});
    return dev.exec();
  }
  
  public async addlicense(devId: ObjectId, licenseId:ObjectId): Promise<IDeveloper | null> {
    const license = await LicenseModel.findById(licenseId).exec();
    const dev = DeveloperModel.findByIdAndUpdate(devId, {$set: {license: license}}, {new: true});
    return dev.exec();
  }
  
  public deleteLicense(id: string): Promise<IDeveloper | null>{
    const dev = DeveloperModel.findByIdAndUpdate(id, {$set: {license: undefined}}, {new: true});
    return dev.exec();
  }
}