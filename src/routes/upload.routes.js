import { Router } from "express";
import multer from "multer";
import { postFile } from "../controllers/upload.controller.js";

export const uploadRouter = Router();

export const upload = multer({
  dest: 'uploads/'
}).single('file');

uploadRouter.post('/upload', postFile);