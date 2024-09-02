const Meal = require('../models/Meal');

exports.getAllMeals = () => Meal.findAll({ include: 'Kitchen' });
exports.createMeal = (data) => Meal.create(data);
