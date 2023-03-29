var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.floor(Math.random()*10)
        y=Math.floor(Math.random()*5);
        let lakshmi = Math.acosh(x);
        let lakshmi2 = Math.log1p(x);
        let lakshmi3= Math.tan(y);
        res.send('Math.acosh() applied for' +x +'is' +lakshmi+'\n Math.log1p() applied for' +x +'is' +lakshmi2+'\n Math.tan() applied for number' +y+'is'+lakshmi3);
    }
    else{
        x =req.query.x;
        let lakshmi = Math.acosh(x);
        let lakshmi2 = Math.log1p(x);
        let lakshmi3= Math.tan(y);
        res.send('Math.acosh() applied for' +x +'is' +lakshmi+'\n Math.log1p() applied for' +x +'is' +lakshmi2+'\n Math.tan() applied for number' +y+'is'+lakshmi3);
    }
});

module.exports = router;