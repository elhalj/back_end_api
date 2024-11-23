import express from 'express';
const app = express();
import Database from './database/database.js';
import { route } from './router/routers.js';
import bodyParser from 'body-parser';
const port = 4000;

const connect = new Database();
app.use(bodyParser.json());
app.use(route);
app.listen(port, () => {
    console.log(`connecté au server http://localhost:${port}`)
});