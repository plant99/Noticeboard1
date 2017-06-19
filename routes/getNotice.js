var express = require('express')
var router = express.Router() ;

router.get('/:noticeHeader',function(req,res,next){
	Notice.findOne({header: req.params.noticeHeader},function(err, notice){
		res.json(notice)
	})
})
module.exports = router ;