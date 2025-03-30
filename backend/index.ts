import dotenv from 'dotenv';
import express from 'express';
import type { Request, Response } from 'express';

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
      title: "Hello World!",
    });
});

server.use(routes);

server.listen(process.env.PORT, () => {
  console.log();
  console.log(`Escutando na porta ${process.env.PORT}`);
});