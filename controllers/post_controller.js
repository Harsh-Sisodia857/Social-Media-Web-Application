const Post = require('../models/post')

module.exports.create = function(req,res){
    Post.create({
        content : req.body.content,
        user : req.user._id
    },function(err,post){
        if(err){
            console.log('error in creating a post');
            return;
        }
        return res.redirect('back');
    })
}




module.exports.like = function(req,res){
    res.end('<h1>Likes</h1>')
}

module.exports.comment = function(req,res){
    res.end('<h1>comments</h1>')
}

// rendering the posts
module.exports.post = function(req,res){
    // populate the user of each post   
    Post.find({}).populate('user').exec( function(err,posts){
        return res.render('post',{
            title : "post",
            posts : posts
        })
    })
}
