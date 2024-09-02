const express = require('express');
const authRoutes = require('./routes/authRoutes');
const kitchenRoutes = require('./routes/kitchenRoutes');
const mealRoutes = require('./routes/mealRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/kitchens', kitchenRoutes);
app.use('/meals', mealRoutes);

app.use(errorHandler);

module.exports = app;
