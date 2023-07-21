import { upload } from '../routes/upload.routes.js';

export const postFile = (req, res) => {
  upload(req, res, (err) => {

    if (err) return res.status(400).send({ message: err.message });

    if (!req.file) return res.status(400).send({ message: 'Nenhum arquivo foi enviado.' });

    res.send(req.file);
  })
};