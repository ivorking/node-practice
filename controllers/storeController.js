exports.myMiddleware = (req, res, next) => {
   req.name = 'ik';
   next();
}

exports.homePage = (req, res) => {
   res.render('index');
};

