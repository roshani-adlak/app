// pages/api/auth/login.js
export default function handler(req, res) {
    const { username, password } = req.body;
  
    // Replace this with your authentication logic
    if (username === 'admin' && password === 'password') {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  }
  