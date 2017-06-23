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
router.get('/approve/:header',function(req, res){
	Notice.findOne({header: req.params.header},function(err, notice){
		notice.can_be_displayed = true ;
		notice.save(function(err, notice){
			if(err){
				res.render('error', {message: 'The notice is already visible by audience'})
			}else{
				res.redirect('/board')
			}
		})
	})
})
module.exports = router ;

	