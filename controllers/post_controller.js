module.exports.like = function(req,res){
    res.end('<h1>Likes</h1>')
}

module.exports.comment = function(req,res){
    res.end('<h1>comments</h1>')
}

module.exports.post = function(req,res){
    res.render('post',{
        title : "post"
    })
}