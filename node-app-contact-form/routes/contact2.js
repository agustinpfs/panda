var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/contact2', function(req, res) {
    res.render('contact2');
});

module.exports = router;
