const express = require('express');
const { getKitchens, createKitchen } = require('../controllers/kitchenController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getKitchens);
router.post('/', authMiddleware, createKitchen);

module.exports = router;
