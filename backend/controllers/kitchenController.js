const kitchenService = require('../services/kitchenService');

exports.getKitchens = async (req, res, next) => {
  try {
    const kitchens = await kitchenService.getAllKitchens();
    res.status(200).json(kitchens);
  } catch (error) {
    next(error);
  }
};

exports.createKitchen = async (req, res, next) => {
  try {
    const { name, location } = req.body;
    const kitchen = await kitchenService.createKitchen({ name, location });
    res.status(201).json(kitchen);
  } catch (error) {
    next(error);
  }
};
