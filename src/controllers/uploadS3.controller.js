import AWS from 'aws-sdk';
import { Bucket, s3 } from '../app.js';
import { uploadS3 } from "../routes/uploadS3.routes.js";

export const postS3File = (req, res) => {
  uploadS3(req, res, (err) => {
    if (err) return res.status(400).send({ message: err.message });

    if (!req.file) return res.status(400).send({ message: 'Nenhum arquivo foi enviado.' });

    const params = {
      Bucket,
      Key: req.file.originalname,
      Body: req.file.buffer
    };

    s3.upload(params, (s3Err, data) => {
      if (s3Err) return res.status(500).send({ message: s3Err });
      
      return res.send(data);
    });
  });
};

export const getS3File = (req, res) => {
  const { fileName } = req.params;
  const params = {
    Bucket,
    Key: fileName,
  };

  s3.getObject(params, (err, data) => {
    if (err) return res.status(404).send({ message: err });

    res.send({ url: `https://${Bucket}.s3.${s3.config.region}.amazonaws.com/${fileName}`, data });
  });
};