var express = require('express') ;
var router = express.Router() ;

router.post('/',function(req, res, next){
	console.log(req)
	if(req.decoded._doc.type === 'teacher' || req.decoded._doc.type === 'cr'){
		console.log(req.body.title)
		if(req.decoded._doc.moderated === false){
			var notice  = new Notice({header: req.body.title, content: req.body.content, can_be_displayed:true}) ;
		}else if(req.decoded._doc.moderated === true){
			var notice  = new Notice({header: req.body.title, content: req.body.content, can_be_displayed:false}) ;
		}

		notice.save(function(err, notice1){
			console.log(notice1)
			res.json({success:true})
		})
	}else{
		res.json({success:false})
	}
	
})
module.exports = router ;

	