import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3456, () => {
  console.log('Server is running on port 3456');
});