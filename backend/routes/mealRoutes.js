const express = require('express');
const { getMeals, createMeal } = require('../controllers/mealController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getMeals);
router.post('/', authMiddleware, createMeal);

module.exports = router;
