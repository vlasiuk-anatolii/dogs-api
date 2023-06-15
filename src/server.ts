import bodyParser from 'body-parser';
import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import dogsRouter from './routes/api/dogs.route';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(dogsRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

export default server;
