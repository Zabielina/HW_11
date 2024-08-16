const users = []; 

export const registerUser = (req, res) => {
  const { email, password } = req.body;

  try {
 
    users.push({ email, password });
    res.redirect('/login'); 
  } catch (err) {
    res.status(500).send('Server error.');
  }
};

