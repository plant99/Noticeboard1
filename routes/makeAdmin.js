var express = require('express') ;
var router = express.Router() ;

router.post('/:username',function(req, res, next){
	if(req.decoded._doc.type === 'teacher'){
		console.log(req.params.username)
		User.findOne({username:req.params.username},function(err, user){
			user.type = 'teacher' ;
			user.save(function(err, user1){
				console.log(user1)
				res.json({success:true})
			})
		})
	}else{
		res.json({success:false})
	}
	
})
module.exports = router ;

	