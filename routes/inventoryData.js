const express = require('express');
const router = express.Router();

//@route    GET api/inventory_data
//@desc     Get all the inventory data
//@access   Public
router.get('/', (req, res) => {
  res.json({ msg: 'Inventory data returned' });
});

//@route    POST api/inventory_data
//@desc     Add new inventory data
//@access   Public
router.post('/', (req, res) => {
  res.json(req.body);
});

//@route    PUT api/inventory_data/:id
//@desc     Updata inventory data
//@access   Public
router.put('/:id', (req, res) => {
  res.json(req.body);
});

//@route    DELETE api/inventory_data/:id
//@desc     Delete inventory data
//@access   Public
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Data deleted' });
});

module.exports = router;
