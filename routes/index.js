const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const ijk = { name: 'ivor', age: 20, cool: true };
  console.log("it works")
  // res.send('Hey! It works!!');
  // res.json(ijk);
  // res.send(req.query.age);
  res.json(req.query);
});

module.exports = router;
