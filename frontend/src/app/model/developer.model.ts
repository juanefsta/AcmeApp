import Asset from "./asset.model";
import License from "./license.model";

export default class Developer {
    _id: any;
    fullname!: string;
    asset!: Asset;
    license!: License;
  }