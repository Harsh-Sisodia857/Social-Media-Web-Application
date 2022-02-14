module.exports.user = function(req,res){
    res.render('user',{
        title : "Profile"
    })

}

module.exports.profile = function(req,res){
    res.end("User's Profile")
}
