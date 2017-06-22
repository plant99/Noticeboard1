var express = require('express') ;
var router = express.Router() ;

router.post('/:username',function(req, res, next){
	User.findOne({username: req.params.username},function(err, user){
		if(err){
			res.json({success: false, message: 'Some error occured'})
		}else{
			if(!user){
				res.json({success: false, message: "User couldn't be found"})	
			}else{
				if(user.type ==='student'){
					user.type = 'cr' ;
					user.save(function(){
						res.json({success: true, message: user.username + ' is the CR henceforth '})
					})
				}else{
					res.json({success: false, message: "User is a teacher. Sorry, a teacher can't take too many charges."})	
				}
			}
		}
	})
	
})
module.exports = router ;
