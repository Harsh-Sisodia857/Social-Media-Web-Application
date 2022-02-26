const User = require('../models/user')
module.exports.user = function (req, res) {
    res.render('user', {
        title: "Users Page"
    })

}

module.exports.profile = function (req, res) {
    res.render('profile', {
        title: "Profile"
    })

}


// render the sign up page
module.exports.signUp = function (req, res) {
    // if user is sign in then he will not be allowed to go to sign up page
    if(req.isAuthenticated()){
       return res.redirect('/users/profile')
    }

    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}

// render the sign in page
module.exports.signIn = function (req, res) {
    // if user is already sign in then he will not be allowed to go to sign in page
    if(req.isAuthenticated()){
       return res.redirect('/users/profile')
    }
   
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data

module.exports.create = function (req, res) {
    // while sign up password are not same
    if (req.body.inputPassword != req.body.confirmPassword) {
        return res.redirect('back');
    }
    // User already exist or not
    User.findOne({ email: req.body.email }, function (err, user) {
        
        if (err) {
            console.log(`error in creating user while signing up ${err}`);
            return;
        }
        // if user is not found in database create new user
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log(`error in creating user while signing up ${err}`);
                    return;
                }
                // redirect to sign in page
                return res.redirect('/users/sign-in')
            })
        }
        // if User Already Exist
        else{
            return res.redirect('back');
        }
    })
}

// sign in and create the session for user

module.exports.createSession = function (req, res) {
    return res.redirect('/users/profile');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/')
}