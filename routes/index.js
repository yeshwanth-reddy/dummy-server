var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"status":"success","data":"picha lite faculty"})
});

router.post('/', function(req, res, next) {
  res.json({"status":"success","data":"picha lite faculty"})
});

module.exports = router;
