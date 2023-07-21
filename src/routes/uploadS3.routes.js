import { Router } from 'express';
import multer from 'multer';
import { getS3File, postS3File } from '../controllers/uploadS3.controller.js';

export const uploadS3Router = Router();

export const uploadS3 = multer({
  storage: multer.memoryStorage(),
}).single('file');

uploadS3Router.post('/uploadS3', postS3File);
uploadS3Router.get('/uploadS3/:fileName', getS3File);