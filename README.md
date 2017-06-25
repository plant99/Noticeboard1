# Noticeboard

An online noticeboard to be used for regulating announcements and academic materials for a class

## Overview

This project is made as a part of the induction procedure of Spider, the R&D club of NIT Trichy. A Noticeboard which only a registered user can use.

- A normal user can only view notices
- A Class Representative can view and add notices
- A teacher(admin) can view and add notice, also can change user permission level. 

**User access levels**

``` Public < Ordinary User < Class Representative < Administrator ```

All the routes defined for users with lower access level are accessible by users with higher access level

## Server routes(GET) 

###### Public routes:

- ```/signup```  Signing up users
- ```/login```  For logging users in
- ```/get_notice```  To GET a particular notice in JSON format using the title of notice
- ```Route to serve static files in public``` folder

###### Routes for ordinary users 

- ```/board```
  1. ```/```  The noticeboard where title of each announcements are displayed
  2. ```/view_notice/[title]```  Display the notice with ```title``` and it's content
- ```/noticeImage/[title]```  Serve an image corresponding to the notice ```title```

###### Routes for Class Representative

- ```/add_new```  To add new notice

###### Routes for Administrators

- ```/board```  Noticeboard cum options for deleting the notice
- ```/admin_panel```  To promote an ordinary user to admin, to make or change the Class Representative 
- ```/delete/[notice_title]```  To get a confirmation page to remove a notice
- ```/make_admin_confirmation/[username]```  To get a confirmation page to make an ordinary user, admin
- ```/moderation/apply/[username]```  Confirmation page to apply moderation on ```username```


## Server routes(POST)

###### Public routes:

- ```/signup```  For signing up users
- ```/login```  For logging users in

###### Routes for ordinary users 

- ```No post request route introduced at this level```

###### Routes for Class Representative

- ```/save_notice```  To save data from /add_new
- ```/moderation/approve/[title]```  To approve post created by moderated users

###### Routes for Administrators

- ```/board```  Noticeboard cum options for deleting the notice
- ```/admin_panel```  To promote an ordinary user to admin, to make or change the Class Representative 
- ```/deleteItem/[title]```  To delete a notice with the title in the url
- ```/makeAdmin/[username]```  To make ```username``` admin
- ```/moderation/apply/[username]```  Apply moderation on ```username```

## Collections(MongoDB)

###### User

An User has the following fields

- username
- password
- type
- moderated

In ```mongoose``` ( a middleware to interact with ```MongoDB``` from ```Node JS``` ), above collection can be modelled in the following way.

```javascript
var User = mongoose.model('user', new Schema({
	username: String ,
	password: String ,
	type: String,
	moderated: Boolean
}))
```

###### Notice

A Notice has the following fields

- header
- content
- can_be_displayed

In ```mongoose```, above collection can be modelled in the following way.

```javascript
var User = mongoose.model('notice', new Schema({
	header:String,
	content: String,
	can_be_displayed:Boolean
}))
```

## Build Instructions (For Linux[Tested with Ubuntu 16.04])

###### **Packages Installation**
1. **Node JS**	     
A Javascript runtime for running our server code.
	
	``` 
	curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
	sudo apt-get install -y nodejs
	```

2. **NPM**(Node Package Manager)\
	A package manager for easy installation of dependencies. It is automatically installed along with NodeJS.
	
	``` 
	sudo apt update
	sudo apt install npm 
	```

3. **MongoDB**(The database)\
	This process requires some documented and comprehensive guide. Please refer to these blogs(preferably, the first one), for installation of `MongoDB`
	- [MongoDB official website docs](https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/)
	
	- [howtoforge](https://www.howtoforge.com/tutorial/install-mongodb-on-ubuntu-16.04/)
	
	

###### Database setup
1. Open mongo shell by typing
	```
	mongo
	```
	in Terminal.
2. In the shell, create a database named `noticeboard` by typing
	```
	use noticeboard
	```
3. Create the first `Administrator` by typing
	```
	db.users.insert({username: admin, password:'$2a$10$JePpGspbJohVb1THFEtHMeIsJgje4vp72G0GQFD2WzVxrFPtpV4ay',type: 'teacher',moderated:'false'})
	```
	which creates an User with `username: 'admin'` and `password:'helloFriend'`
	

###### Server setup

1. Clone this project to a suitable directory using
	```
	git clone https://github.com/shivPadhi/Noticeboard.git
	```

2. Make sure the Mongo DB server is running. Or type the following command
	```
	sudo service mongod start
	```
3. - Go to the directory and run the server using

	```
	nodejs app.js
	```
	in the `terminal`.
   - (or) An efficient method to run Node JS servers is with [Nodemon](https://nodemon.io/)
   
	```
	npm install -g nodemon
	```
	Now everytime a component of the server is changed, `Nodemon` restarts your server. To run a server with Nodemn instead 	of `nodejs app.js` type:
	```
	nodemon app.js
	```


## Dependencies 

- [Express](http://expressjs.com/)
	A framework written over Node JS.
- [Body-Parser](https://www.npmjs.com/package/body-parser)
	Middleware to parse request body
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
	Middleware to parse cookies
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
	Middleware to handle file uploads.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
	Middleware to generate and verify web-tokens.
- [mongoose](https://www.npmjs.com/package/mongoose)
	Library to interact efficiently with MongoDB
- [nodemon](https://www.npmjs.com/package/nodemon)
	Keeps track of file-changes and restarts server after every change in server cde
- [path](https://nodejs.org/api/path.html)
	Helps merging paths efficiently
- [morgan]()
	Helps to log requests details to console
- [bcrypt](https://www.npmjs.com/package/bcrypt)
	Helps to hash passwords and compare them when requested.
- [captchapng](https://www.npmjs.com/package/captchapng)
	Generates png captcha image of numbers having arbitrary shapes and positions.
- **This list doesn't include the sub-dependencies required by above libraries, they are auto-generated**
## Front-End libraries

- [jQuery](http://api.jquery.com/) Library for javaScript
- [jQuery-cookie](https://github.com/carhartl/jquery-cookie) Library to set, get, modify and delete cookies with jQuery.


## Pending tasks(Top 3)

- [x] Add navigation menu to every layout
- [ ] Verify file type before uploading to server
- [ ] Make the layouts responsive

## Demo Server
A server for the above app is running live at [`this place`](http://139.59.255.96:3000)
