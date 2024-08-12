

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Furniture Landing Page' });
});

router.get('/products', (req, res) => {
 

  res.render('products', { title: 'Our Products', products });
});

export default router;
