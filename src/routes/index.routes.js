import { Router } from "express";
import { uploadRouter } from "./upload.routes.js";
import { uploadS3Router } from "./uploadS3.routes.js";

export const indexRouter = Router();

indexRouter.use(uploadS3Router, uploadRouter);