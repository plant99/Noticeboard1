var express = require('express')
var router = express.Router() ;

router.post('/:header',function(req,res,next){
	Notice.findOneAndRemove({header: req.params.header},function(){
		res.json({success:true})
	})
})

module.exports = router ;