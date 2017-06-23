var express = require('express')
var router = express.Router() ;

router.get('/',function(req, res, next){
	if(req.decoded){
		Notice.find({},function(err, notices){
			if(notices.length === 0){
				console.log(req.decoded._doc.type)
				res.render('board',{
					notices: notices,
					type : req.decoded._doc.type
				})
			}else{
				console.log(req.decoded._doc.type)
				res.render('board',{
					notices: notices,
					type : req.decoded._doc.type
				})
			}
		})
	}else{
		res.render('error')
	}
})

router.get('/view_notice/:headerName',function(req, res, next){
	console.log(req.params.headerName)
	Notice.findOne({header: req.params.headerName},function(err, notice){
		console.log(notice)
		res.render('showNotice',{
			notice:notice
		})
	})
})

module.exports = router ;