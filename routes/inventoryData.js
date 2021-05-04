const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const InventoryData = require('../models/Inventory');

//@route    GET api/inventory_data
//@desc     Get all the inventory data
//@access   Public
router.get('/', async (req, res) => {
  try {
    const inventoryData = await InventoryData.find({ id: req.body.id });
    res.json(inventoryData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/inventory_data
//@desc     Add new inventory data
//@access   Public
router.post(
  '/',
  [check('ItemCode', 'Item Code is required').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { ItemCode, Name1, Name2, Price, VendorName, Date } = req.body;
      const newData = new InventoryData({
        ItemCode,
        Name1,
        Name2,
        Price,
        VendorName,
        Date,
      });

      const data = await newData.save();
      res.json(data);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//@route    PUT api/inventory_data/:id
//@desc     Updata inventory data
//@access   Public
router.put('/:id', async (req, res) => {
  const { ItemCode, Name1, Name2, Price, VendorName, Date } = req.body;
  let dataFields = {};
  if (ItemCode) dataFields.ItemCode = ItemCode;
  if (Name1) dataFields.Name1 = Name1;
  if (Name2) dataFields.Name2 = Name2;
  if (Price) dataFields.Price = Price;
  if (VendorName) dataFields.VendorName = VendorName;
  if (Date) dataFields.Date = Date;
  try {
    let dataItem = await InventoryData.findById(req.params.id);
    if (!dataItem) res.status(404).json({ msg: 'Data not found!' });
    dataItem = await InventoryData.findByIdAndUpdate(
      req.params.id,
      { $set: dataFields },
      { new: true }
    );
    res.json(dataItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    DELETE api/inventory_data/:id
//@desc     Delete inventory data
//@access   Public
router.delete('/:id', async (req, res) => {
  try {
    const data = await InventoryData.findById(req.params.id);
    if (!data) res.status(404).json({ msg: 'Data not found!' });
    await InventoryData.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Data Entry Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
