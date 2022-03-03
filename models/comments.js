const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    // comments belong to user
    // The ref option is what tells Mongoose which model to use during population
    user : {
        type : mongoose.Schema.Types.ObjectId,
        // model name User
        ref : 'User'
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        // model name Post
        ref : 'Post'
    }
},{
    timestamps : true
})

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;