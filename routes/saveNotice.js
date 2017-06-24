var express = require('express') ;
var router = express.Router() ;
var fileUpload = require('express-fileupload');

router.post('/',function(req, res, next){
	console.log(req.files.image);
	if(req.decoded._doc.type === 'teacher' || req.decoded._doc.type === 'cr'){
		Notice.findOne({header: req.body.title}, function(err, noticeCheck){
			if(noticeCheck){
				console.log(noticeCheck)
				res.render('addNotice', {message:'Notice with the same header exists.'})
			}else{
				var sampleFile = req.files.image;
				if(req.decoded._doc.moderated === false){
					var notice  = new Notice({header: req.body.title, content: req.body.content, can_be_displayed:true}) ;
				}else if(req.decoded._doc.moderated === true){
					var notice  = new Notice({header: req.body.title, content: req.body.content, can_be_displayed:false}) ;
				}
				if(sampleFile){
					sampleFile.mv(__dirname+'/../usersImage/'+req.body.title+'.png', function(err) {
					    if (err)
					      console.log(err)
					});
				}

				notice.save(function(err, notice1){
					if(err){
						res.json({success:false})
					}else{
						console.log(notice1)
						res.render('addNotice',{message: 'Notice successfully saved!'})
					}
				})

			}
		})
	}else{
		res.json({success:false})
	}
	
})
module.exports = router ;

	