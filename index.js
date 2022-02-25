const express = require("express");
const app = express();
const port = 8000;
// To handle the cookie
const cookireParser = require('cookie-parser')
app.use(cookireParser())

// using layouts
const expressLayout = require('express-ejs-layouts')
app.use(express.urlencoded())

const db = require('./config/mongoose')
app.use(expressLayout);

// static files
app.use(express.static('./assets'))

// use express router
app.use('/',require('./routes/index'))

// extract style and scripts from sub pages into the layout and it put the style and script file in the sub pages using the syntax <%-styles%> and <%-scripts%>
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

// setting view engine 
app.set('view engine','ejs')
app.set('views','./views')

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`)
        return;
    }
    console.log(`Server is running on port ${port}`);
})