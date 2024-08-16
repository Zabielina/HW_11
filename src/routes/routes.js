
import express from 'express';
import { registerUser } from '../controllers/userController.js'; 
import { validateRegistration } from '../middleware/validateRegistration.js'; 

const router = express.Router();

router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});


router.post('/register', validateRegistration, registerUser);

router.get('/', (req, res) => {
  res.render('index', { title: 'Furniture Landing Page' });
});

router.get('/products', (req, res) => {
 

  res.render('products', { title: 'Our Products'});
});

export default router;

