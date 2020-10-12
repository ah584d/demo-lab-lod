var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "יוסי המלך"
  },
  {
    "id": 2,
    "name": "אפי הסקראם מאסטר"
  }];
  res.send(users);
});

module.exports = router;
