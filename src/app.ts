import express from 'express';
import routes from './routes/index.js';
import manipuladorDeErros from './shared/middlewares/manipuladorDeErros.js';
import manipulador404 from './shared/middlewares/manipulador404.js';

const app = express();

app.use(express.json());
app.use(routes);

app.use(manipulador404)

app.use(manipuladorDeErros)

export default app; 