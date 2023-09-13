import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';
import 'dotenv/config';
import connectDb from './config/database.config.js';
import routes from './routes/index.js';
import errorHandler from './middlewares/error.middleware.js';
import notFound from './middlewares/notFound.middleware.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(logger('dev'));
app.use(
  cors({
    origin: '*',
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'POST, GET, PUT, PATCH, DELETE',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDb();
});

