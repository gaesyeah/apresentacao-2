import AWS from 'aws-sdk';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { indexRouter } from './routes/index.routes.js';

//configuração express
const app = express();
app.use(express.json(), cors());

//configuração dotenv
dotenv.config();
const { PORT, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY_ID, AWS_BUCKET_NAME } = process.env;

//configurações amazon S3
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY_ID,
  region: 'sa-east-1'
});
export const s3 = new AWS.S3();
export const Bucket = AWS_BUCKET_NAME;

//uso das rotas;
app.use(indexRouter);

//LISTEN
app.listen(PORT, () => console.log(`Rodando em http://localhost:${PORT}`));

