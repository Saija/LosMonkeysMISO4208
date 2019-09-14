var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

router.post("/", function(req, res, next) {
  res.json({ code: 200, message: "This test is 0K!" })
})

module.exports = router;