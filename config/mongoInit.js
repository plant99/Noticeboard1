var mongoose = require('mongoose') ;

module.exports.initDb = function(){
	mongoose.connect('mongodb://localhost:27017/noticeboard') ;
	var db = mongoose.connection ;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open',function(){
    	console.log('Connected')

    	User = require('../models/User')
    	Notice = require('../models/Notice')

    	var user = new User({
    		username: 'chutiya',
    		password: 'Chutiya',
    		type: 'ChutiyA'
    	})

    	var notice = new Notice({
    		content: 'This is piece of shit brother'
    	})

    	user.save(function(err, user){
    		if(err){console.log(err)}
    		else{
    			console.log(user)
    		}
    	})

    	notice.save(function(err, notice){
    		if(err){console.log(err)}
    		else{
    			console.log(user)
    		}
    	})    	
    })
}

//worked