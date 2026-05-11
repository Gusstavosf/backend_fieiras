import express from 'express';
import estoqueRoutes from './routes/estoqueRoutes.js';

const app = express();

app.use(express.json());

app.use(estoqueRoutes);

export default app; 