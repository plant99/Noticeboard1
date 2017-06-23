var express = require('express') ;
var router = express.Router() ;

router.get('/apply/:username',function(req, res, next){
	User.findOne({username: req.params.username}, function(err, user){
		res.render('moderationConfirmation',{user: user})
	})
})

router.post('/apply/:username',function(req, res, next){
	User.findOne({username: req.params.username}, function(err, user){
		user.moderated = true ;
		user.save(function(err, user){
			if(err){
				res.json({success: false})
			}else{
				res.json({success: true})
			}
		})
	})
})
module.exports = router ;

	