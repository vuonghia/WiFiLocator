var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
// EXPRESS created this
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// // Separated Controllers & Routes
// var homepageController = function (req, res) {
//   res.render('index', { title: 'Express' });
// };

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
