import bodyParser from 'body-parser';
import express, { Application } from 'express';
import cors from 'cors';
import { initializeDatabase, insertDogsData } from './config/database';
import { conectionToDb, getDogRows } from './config/database';
import 'dotenv/config';
import dogsRouter from './routes/api/dogs.route';

// import { dogsData } from './initial-data';
// import { insertDogsData } from './config/database';

const app: Application = express();
// initializeDatabase()
// insertDogsData(dogsData);
//conectionToDb();

//getDogRows();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(dogsRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

export default server;
