module.exports = function(req,res,next){
	console.log('Authenticate')
	next()	 ;
}