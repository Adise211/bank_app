import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import {balanceFilter, cityFilter, mortgageFilter, cardsFilter, twoFilters, threeFilters} from '../controllers/filters.js';

const router = express.Router();

router.get('/', getPosts);

router.post('/two', twoFilters);
router.post('/three', threeFilters);
router.post('/upto', balanceFilter);
router.post('/cities', cityFilter);
router.post('/mortgage', mortgageFilter);
router.post('/cards', cardsFilter);


router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);



export default router;
