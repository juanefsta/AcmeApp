import { Application } from "express";
import cors from "cors";
import express from "express";
import { DeveloperController } from "./controllers/developer.controller";
import { DeveloperService } from "./services/developer.service";
import mongoose from "mongoose";
import { MONGO_URL } from "./constants/acmeApp.contants";
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setControllers();
    this.setMongoConfig();
  }

  private setConfig() {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }
  
  private setControllers() {
    const developerController = new DeveloperController(new DeveloperService());
    this.app.use("/developer", developerController.router);
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }
}

export default new App().app;