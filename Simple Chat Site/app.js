const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);  //server constructor 
const path = require('path'); //for routing purposes
const port = 8000;


app.use(express.urlencoded({extended:false}));

const indexRouter = require('./routes/index'); //router used to navigate pages

app.use('/', express.static('public')); //public directory houses resources

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');  //declare that pug will be used
app.set('Content-Type', 'text/html'
	,'Content-Type', 'text/css');

app.use('/', indexRouter);

io.on('connection', (socket) => {
	console.log("connected");

	socket.on('message', (data) =>{
		console.log(data.message);
		let message = data.message;
		let user = data.username;
		console.log(user)
		//socket.emit('chat', { message, username: user});
		io.emit('chat', { message, username: user});
	})

	socket.on('setUser', (data)=>{
		let username = data.username;
		//console.log(username)

		socket.emit('UserSetting' , {username: username});
	})
})

http.listen(port);
