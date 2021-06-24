import { ObjectId } from "mongoose";
import { IAsset } from "../interfaces/asset.interface";
import { IDeveloper } from "../interfaces/developer.interface";
import { AssetModel } from "../models/asset.model";
import { DeveloperModel } from "../models/developer.model";
var ObjectId = require('mongoose').Types.ObjectId;

export class DeveloperService {

  public getAll(): Promise<IDeveloper[]> {
    return DeveloperModel.find({}).exec();
  }

  public add(dev: IDeveloper): Promise<IDeveloper> {
    console.log(dev);
    const newDev = new DeveloperModel(dev);
    return newDev.save();
  }

  public edit(dev: IDeveloper): Promise<IDeveloper> {
    const newDev = new DeveloperModel(dev);
    return newDev.save();
  }

  public disable(id: any): void {
  }


  public addAsset(dev: IDeveloper): Promise<IDeveloper> {
    const newDev = new DeveloperModel(dev);
    return newDev.save();
  }
  
  // public async deleteAsset(id: string): Promise<IDeveloper> {
  //   const dev = await DeveloperModel.findById(id).exec();
  //   dev?.asset = 
  //   if (!deleted) {
  //     throw new Error(`Pokemon with id '${id}' not found`);
  //   }

  //   return deleted;
  // }
  
  // public addlicense(dev: IDeveloper): Promise<IDeveloper> {
  //   const newDev = new DeveloperModel(dev);
  //   return newDev.save();
  // }
  
  // public deleteLicense(id: string): Promise<IDeveloper> {
  //   const deleted: Promise<IPokemon> = await Pokemon.findByIdAndDelete(
  //     id
  //   ).exec();

  //   if (!deleted) {
  //     throw new Error(`Pokemon with id '${id}' not found`);
  //   }

  //   return deleted;
  // }
}