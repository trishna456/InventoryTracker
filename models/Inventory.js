const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema({
  ItemCode: {
    type: String,
    required: true,
  },
  Name1: {
    type: String,
  },
  Name2: {
    type: String,
  },
  Price: {
    type: String,
  },
  VendorName: {
    type: String,
  },
  Date: {
    type: String,
    default: new Date(),
  },
});

module.exports = mongoose.model('inventoryData', InventorySchema);
