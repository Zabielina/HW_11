
import bcrypt from 'bcrypt';

const users = []; 

export const validateRegistration = (req, res, next) => {
  const { email, password } = req.body;

 
  if (!email || !password || password.length < 8) {
    return res.status(400).send('Invalid email or password.');
  }


  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).send('Email already registered.');
  }


  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return next(err);
    req.body.password = hashedPassword;
    next();
  });
};

