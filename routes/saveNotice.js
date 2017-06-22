var express = require('express') ;
var router = express.Router() ;

router.post('/',function(req, res, next){
	console.log(req)
	if(req.decoded._doc.type === 'teacher' || req.decoded._doc.type === 'cr'){
		console.log(req.body.title)
		var notice  = new Notice({header: req.body.title, content: req.body.content}) ;
		notice.save(function(err, notice1){
			console.log(notice1)
			res.json({success:true})
		})
	}else{
		res.json({success:false})
	}
	
})
module.exports = router ;

	