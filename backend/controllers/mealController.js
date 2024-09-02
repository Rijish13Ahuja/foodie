const mealService = require('../services/mealService');

exports.getMeals = async (req, res, next) => {
  try {
    const meals = await mealService.getAllMeals();
    res.status(200).json(meals);
  } catch (error) {
    next(error);
  }
};

exports.createMeal = async (req, res, next) => {
  try {
    const { name, price, kitchenId } = req.body;
    const meal = await mealService.createMeal({ name, price, kitchenId });
    res.status(201).json(meal);
  } catch (error) {
    next(error);
  }
};
