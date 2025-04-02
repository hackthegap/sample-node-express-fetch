// controllers/postController.js
import fetch from 'node-fetch';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async (req, res) => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  res.json(data);
};

export const getPostById = async (req, res) => {
  const response = await fetch(`${BASE_URL}/${req.params.id}`);
  const data = await response.json();
  res.json(data);
};

export const getPostComments = async (req, res) => {
  const response = await fetch(`${BASE_URL}/${req.params.id}/comments`);
  const data = await response.json();
  res.json(data);
};

export const createPost = async (req, res) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  res.status(201).json(data);
};

export const updatePost = async (req, res) => {
  const response = await fetch(`${BASE_URL}/${req.params.id}`, {
    method: 'PUT',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  res.json(data);
};

export const partialUpdatePost = async (req, res) => {
  const response = await fetch(`${BASE_URL}/${req.params.id}`, {
    method: 'PATCH',
    body: JSON.stringify(req.body),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  res.json(data);
};

export const deletePost = async (req, res) => {
  await fetch(`${BASE_URL}/${req.params.id}`, { method: 'DELETE' });
  res.status(204).send();
};
