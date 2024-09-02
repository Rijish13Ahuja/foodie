const Kitchen = require('../models/Kitchen');

exports.getAllKitchens = () => Kitchen.findAll();
exports.createKitchen = (data) => Kitchen.create(data);
