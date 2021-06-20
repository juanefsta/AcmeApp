import { Application } from "express";
import cors from "cors";
import express from "express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
  }

  private setConfig() {
    // Allows us to receive requests with data in json format
    this.app.use(express.json({ limit: "50mb" }));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
    // Enables cors
    this.app.use(cors());
  }
}

export default new App().app;