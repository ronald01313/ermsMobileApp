const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
require('dotenv').config();


module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ error: 'You must be logged in. Token not provided.' });
  }

  const token = authorization.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'Invalid token.' });
    }

    const { _id } = payload;

    try {
      const user = await User.findById(_id);

      if (!user) {
        return res.status(401).send({ error: 'User not found.' });
      }

      // Optionally, you can attach the user to the request object for use in other middleware or routes
      req.user = user;

      // Continue with the request
      next();
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Server error.' });
    }
  });
};
