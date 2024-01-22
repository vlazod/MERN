// const express = require('express');
import express from 'express'; // to use this ES6 modules declaration, specify in the package.json "type": "module"
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Port configuration fron .env file. Idicates the app yo use the port declarated on that file OR the port 5000
dotenv.config();
const port = process.env.PORT || 5000;
/////////////////////////////////////////

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is resady'))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`)); 