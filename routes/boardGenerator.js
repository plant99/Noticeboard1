var express = require('express')
var router = express.Router() ;

router.get('/',function(req, res, next){
	Notice.find({},function(err, notices){
		if(notices.length === 0){
			res.json({success:false, message: 'No notice to display sorry'})
		}else{
			console.log(req.decoded._doc.type)
			res.render('board',{
				notices: notices,
				type : req.decoded._doc.type
			})
		}
	})
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