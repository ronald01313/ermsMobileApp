const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).send({ error: 'Please fill all the fields' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(422).send({ error: 'Email is already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(200).send({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).send({ error: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(422).send({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(422).send({ error: 'Invalid email or password' });
    }

    // Create and send a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });

    // Optionally, send user details or any other necessary information in the response
    // res.status(200).send({ userId: user._id, email: user.email });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error' });
  }
});

module.exports = router;
