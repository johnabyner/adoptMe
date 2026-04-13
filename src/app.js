import express from "express";
export const app = express();

app.use(express.json());

//HOME
import {homeStart} from './controllers/homeStart.js';
app.use(express.static('public'));
app.get('/', homeStart);

//DOGS
import dogsRouter from "./router/dogsRouter.js";
app.use('/dogs', dogsRouter);


//rota nao encontrada
import {rotaInvalida} from './controllers/rotaInvalida.js'
app.use(rotaInvalida)