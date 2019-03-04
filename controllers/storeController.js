// exports.myMiddleware = (req, res, next) => {
//    req.name = 'West';
//    if(req.name === 'West') {
//       throw Error('Stupid');
//    }
//    next();
// };

const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
   console.log(req.name);
   res.render('index');
};

exports.addStore = (req,res) => {
   res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
   // try {
   //    const store = new Store(req.body);
   //    await store.save();
   //    console.log('it worked')
   // }
   const store = new Store(req.body);
   await store.save();
   // console.log('It worked');
   res.redirect('/');
};