// const express = require('express');
import express from 'express'; // to use this ES6 modules declaration, specify in the package.json "type": "module"
import dotenv from 'dotenv';
dotenv.config(); // <- se llama a la funcion config acto seguido de importar el modulo dotenv para que funcione en donde quiera que se llame una variable declarada en el
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';

connectDB(); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is resady'))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`)); 