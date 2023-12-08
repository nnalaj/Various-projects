const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
//const querystring = require('querystring');
const path = require('path');
const port = 8000;
const indexRouter = require('./routes');
const session = require('express-session');
const FileSTore = require('session-file-store')(session);

app.use(express.urlencoded({extended:false}));
app.use(cookieparser())
app.use('/', express.static('public'));
app.use(session({
	store: new FileSTore(),
	secret: "wowzers",
	resave: false,
	saveUninitialized: false
}));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.set('Content-Type', 'text/html','Content-Type', 'text/css');
app.use('/', indexRouter);


app.get('/', (req, res) =>{
	//res.setHeader('Set-Cookie', 'arc=0') //low level way of setting cookies dont do it better tips in index
										 
	res.render('/index');
});

app.get('/yea', (req, res) => {
	res.render('yea');
});

app.get('/dude', (req, res) => {
	res.render('dude');
});

app.get('/yeehaw', (req, res) => {
	res.render('yeehaw');
});

app.get('/subscribe', (req, res) => {
	res.render('subscribe');
})

app.listen(port);
