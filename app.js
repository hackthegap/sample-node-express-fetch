import express from 'express';
import postRoutes from './routes/postRoutes.js';

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Our MVC-style Express app is running.');
});

// Register routes
app.use('/posts', postRoutes);

export default app;
