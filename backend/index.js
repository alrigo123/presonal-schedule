import express from 'express';
import cors from 'cors';
import  router from './routes/task.routes.js';

const app = express();

app.get('/', (req, res) => {
  try {
    res.send('Database is connected');
  } catch (err) {
    res.status(500).send('Database connection error');
  }
});

app.use('/api', router);

app.listen(3456, () => {
  console.log('Server is running on port 3456');
});