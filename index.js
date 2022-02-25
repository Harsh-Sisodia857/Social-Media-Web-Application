const express = require("express");
const app = express();
const port = 8000;
// To handle the cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// using layouts
const expressLayout = require('express-ejs-layouts')
app.use(express.urlencoded())

const db = require('./config/mongoose')
// used for session cookie
const session = require('express-session')
const passport = require('passport')
const passportLocal = require('./config/passport-local-strategy')
app.use(expressLayout);

// static files
app.use(express.static('./assets'))


// extract style and scripts from sub pages into the layout and it put the style and script file in the sub pages using the syntax <%-styles%> and <%-scripts%>
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

// setting view engine 
app.set('view engine','ejs')
app.set('views','./views')

app.use(session({
    // properties need to be set  for cookie
    // name of cookie
    name : 'codeial',
    // TODO change the secret before deployment in production mode
    secret : 'blahsomething',
    // when user is not signed in we don't want to store extra data in session cookie
    saveUninitialized : false,
    // when the identity is establish then i dont't want to rewrite the identity
    resave : false,
    // session expire time
    cookie : {
        maxAge : (1000 * 60 * 100)
    }
    
    }))
// initializing passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// use express router
app.use('/',require('./routes/index'))

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`)
        return;
    }
    console.log(`Server is running on port ${port}`);
})