module.exports.profile = function(req,res){
    res.render('user',{
        title : "Profile"
    })

}

module.exports.user = function(req,res){
    res.end("<h1>User's Page</h1>");
}