import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

import shotRoutes from './routes/shots';  // How does Express know the name "shotRoutes"??

const app = express();

app.use(cors());
app.use(json());
app.use('/api/shots', shotRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Basketball Shot Tracker API' });
});

export default app;