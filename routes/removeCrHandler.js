var express = require('express') ;
var router = express.Router() ;

router.get('/:username',function(req, res, next){
	console.log('Chutiya')
	User.findOne({username: req.params.username},function(err, user){
		user.type = 'student' ;
		user.save(function(){
			res.redirect('/admin_panel')
		})
	})
	
})
module.exports = router ;

	