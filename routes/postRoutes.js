import { Router } from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  partialUpdatePost,
  deletePost,
  getPostComments
} from '../controllers/postController.js';

const router = Router();

// just basic routes here... and let's improve it!! 

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.get('/:id/comments', getPostComments);
router.post('/', createPost);
router.put('/:id', updatePost);
router.patch('/:id', partialUpdatePost);
router.delete('/:id', deletePost);

export default router;
