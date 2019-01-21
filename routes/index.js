const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'ivor', age: 20, cool: true };
  // console.log("it works")
  // res.send('Hey! It works!!');
  // res.json(wes);
  // res.send(req.query.age);
  // res.json(req.query);
  res.render('hello', {
    name: 'ik',
    dog: req.query.dog
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
