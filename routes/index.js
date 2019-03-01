const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
// router.get('/', storeController.myMiddleware, storeController.homePage);
router.get('/', storeController.homePage);

// router.get('/', (req, res) => {
//     const wes = { name: 'Wes', age: 100, cool: false };
//     // res.json(req.query);
//     res.render('hello', {
//         name: 'ivor',
//         dog: req.query.dog,
//         title: 'food yes'
//     });
// });

// router.get('/reverse/:name', (req, res) => {
//     const reverse = [...req.params.name].reverse().join('')
//     res.send(reverse);
// });

module.exports = router;