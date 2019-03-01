// exports.myMiddleware = (req, res, next) => {
//    req.name = 'West';
//    if(req.name === 'West') {
//       throw Error('Stupid');
//    }
//    next();
// };

exports.homePage = (req, res) => {
   console.log(req.name);
   res.render('index');
};

exports.addStore = (req,res) => {
   res.render('editStore', { title: 'Add Store' });
}

exports.createStore = (req, res) => {
   res.json(req.body);
}