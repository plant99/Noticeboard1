var express = require('express')
var router = express.Router() ;

router.post('/',function(req,res,next){
	console.log('Signup hai bhai')
	console.log(req.body.username)
	User.find({username:req.body.username},function(err, user){
		if(user.length){
			console.log(user)
			res.json({success: false, message: 'user exists, please login'})
		}else{
			var user = User({username: req.body.username, password: req.body.password, type: 'student'})
			user.save(function(err,user){
				console.log(user)
			}) ;
			setTimeout(function(){
				res.redirect('/login')
			},1000)
		}
	})
})

router.get('/',function(req, res, next){
	res.render('signup')
})

module.exports = router ;