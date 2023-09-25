import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  try {
    res.send('Database is connected');
  } catch (err) {
    res.status(500).send('Database connection error');
  }
});

//ROUTES
import tasks_routes from './routes/task.routes.js';
app.use(tasks_routes) 

app.listen(3456, () => {
  console.log('Server is running on port 3456');
});