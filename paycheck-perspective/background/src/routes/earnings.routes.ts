import { Router } from "express";
import EarningsController from "~background/src/controllers/earnings.controller";

class EarningsRoutes {
    router = Router();
    controller = new EarningsController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
    }
}

export default new EarningsRoutes().router;