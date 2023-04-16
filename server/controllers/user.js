const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const config=require('../config')

//SignUP
exports.signup = (req, res, next) => {
  const { firstname,lastname, email, password,liste } = req.body;

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).json({ message: 'Email is already registered' });
    }

    const user = new User({ firstname,lastname, email, password ,liste});
    user.save((err, newUser) => {
      if (err) {
        return next(err);
      }

      const token = jwt.sign({ id: newUser._id }, config.secretKey);
      res.json({ user: newUser, token });
    });
  });
};

// SignIN 

exports.signin=( (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    user.checkPassword(password, (err, isMatch) => {
      if (err) {
        return next(err);
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ id: user._id }, config.secretKey);
      res.json({ 
   
        message:"logged in",
        user, token });
    });
    console.log("logged in")
  });
})

//get all users 

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users from the database
    res.json(users); // Return the users in the response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle any errors
  }
};


 //getuserbyid 

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Retrieve the user with the specified ID from the database
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // Handle case where user doesn't exist
    }
    res.json(user); // Return the user in the response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle any errors
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id); // Retrieve the user with the specified ID from the database
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // Handle case where user doesn't exist
    }
    Object.assign(user, req.body); // Update the user with the request body
    await user.save(); // Save the updated user to the database
    res.json(user); // Return the updated user in the response
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle any errors
  }
};
//delete user 
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id); // Delete the user with the specified ID from the database
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // Handle case where user doesn't exist
    }
    res.json({ message: 'User deleted' }); // Return success message in the response
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle any errors
  }
};



