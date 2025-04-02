import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(express.json()); // for parsing application/json

// Home route
app.get('/', (req, res) => {
  res.send('Our application is running. All good here.');
});

// Get all posts
app.get('/posts', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  res.json(data);
});

// Get a single post
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  res.json(data);
});

// Create a new post
app.post('/posts', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  res.status(201).json(data);
});

// Update a post completely
app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  res.json(data);
});

// Partially update a post
app.patch('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  res.json(data);
});

// Delete a post
app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' });
  res.status(204).send(); // No Content
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
