const express = require('express');
const router = express.Router();
// const storeController = require('../controllers/storeController');

// // Do work here
// router.get('/', storeController.homePage);

// module.exports = router;

router.get('/', (req, res) => {
    const wes = { name: 'Wes', age: 100, cool: false };
    // res.json(req.query);
    res.render('hello.pug');
})

router.get('/reverse/:name', (req, res) => {
    const reverse = [...req.params.name].reverse().join('')
    res.send(reverse);
});

module.exports = router;