var jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
	console.log(req.body)
	var token = req.body.token || req.headers['x-access-token'] || req.query.token || req.cookies.token
	console.log(token)
	if(token){
		jwt.verify(token, superSecret, function(err, decoded){
			if(err){
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			}
			req.decoded = decoded ;
			console.log(decoded)
			next() ;
		})
	}else{
		res.end('No permission, sorry')
	}
}