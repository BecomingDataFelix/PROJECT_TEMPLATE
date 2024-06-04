import asyncHandler from "express-async-handler";
import express from 'express';
import bodyParser from 'body-parser';
import authenticationRoutes from '../modules/authentication/routes/authenticationRoutes';
import { errorHandler } from '../middleware/errorHandler';

const app = express();

app.use(bodyParser.json());

//middleware
app.use(errorHandler);


// routes
app.use('/auth', authenticationRoutes);



export default app;
