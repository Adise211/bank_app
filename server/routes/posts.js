import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost, balanceFilter, cityFilter, mortgageFilter, cardsFilter } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/upto', balanceFilter);
router.get('/cities', cityFilter);
router.get('/mortgage', mortgageFilter);
router.get('/cards', cardsFilter);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);



export default router;
