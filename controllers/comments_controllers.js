const Comment = require('../models/comments');
const Post = require('../models/post')
module.exports.create = function(req,res){
    Post.findById(req.body.post,function(err,post){
        if(post){
            // console.log(post)
            Comment.create({
                content : req.body.content,
                post : req.body.post,
                user : req.user._id
            },function(err,comment){
                if(err){
                    console.log('Error Occur');
                    return;
                }
                post.comments.push(comment);
                post.save();
                res.redirect('/post')
            })
        }
    })
}