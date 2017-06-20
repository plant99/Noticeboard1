var express = require('express')
var router = express.Router() ;

router.post('/:header',function(req,res,next){
	if(req.decoded._doc.type === 'teacher'){
		Notice.findOneAndRemove({header: req.params.header},function(){
			res.json({success:true})
		})
	}else{
		res.json({success:false})
	}
})

module.exports = router ;

/*
	if(req.decoded._doc.type === 'teacher'){
	
	}else{
		res.json({success:false})
	}

*/