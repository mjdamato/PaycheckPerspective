import { Application } from "express";
import earningsRoutes from "./earnings.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/earnings", earningsRoutes);
  }
}