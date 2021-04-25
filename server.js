const express = require('express');

const app = express();

//init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to Inventory Management App' })
);

//Define routes
app.use('/api/inventory_data', require('./routes/inventoryData'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
