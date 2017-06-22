var express = require('express')
var router = express.Router() ;

router.get('/',function(req, res, next){
	if(req.decoded._doc.type === 'teacher'){
		User.find({},function(err, users){

			User.findOne({type:'cr'},function(err, cr){
				res.render('adminPanel',{users: users, cr: cr})	
			})
			
		})
	}else{
		res.render('error', {
			message: 'Looks like, you dont have enough permission'
		})
	}
})

//save for future post requests
router.post('',function(req, res, next){
	
})

module.exports = router ;