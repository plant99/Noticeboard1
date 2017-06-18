var express = require('express')
var router = express.Router() ;

router.get('/',function(req,res,next){
	res.end('Sign Up')
})

module.exports = router ;