const authService = require('../services/authService');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await authService.registerUser({ name, email, password });
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);
    const token = generateToken(user);
    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};
