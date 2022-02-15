const express = require("express");
const app = express();
const port = 8000;

// using layouts
const expressLayout = require('express-ejs-layouts')

app.use(expressLayout);

// static files
app.use(express.static('./assets'))

// use express router
app.use('/',require('./routes/index'))

// extract style and scripts from sub pages into the layout
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