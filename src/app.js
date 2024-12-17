import express from 'express';
import bodyParser from 'body-parser';
import notasRoutes from './router/notasRoutes.js'; 

const app = express();
app.use(bodyParser.json());
app.use('/api', notasRoutes);

export default app;
