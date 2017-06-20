var express = require('express')
var router = express.Router() ;

router.get('/',function(req, res, next){
	if(req.decoded._doc.type === 'teacher'){
		User.find({},function(err, users){
			res.render('adminPanel',{users: users})
		})
	}else{
		res.json({success:false})
	}
})

//save for future post requests
router.post('',function(req, res, next){
	
})

module.exports = router ;