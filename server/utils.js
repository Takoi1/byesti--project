import jwt from 'jsonwebtoken';



export const isAdmin=(req, res, next) {
    const user = req.user;
    if (user && user.liste === 'admin') {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }
  