// The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which //accepts these credentials and calls done providing a user.

const passport = require('passport');
const User = require('../models/user');
// passport local is one of the strategy of passport
const LocalStrategy = require('passport-local').Strategy; 

// authentication using passport
passport.use(new LocalStrategy({
    //username
    usernameField : 'email'
},
    function(email,password,done){
        // find a user and establish the identity
        User.findOne({email : email},function(err,user){
            if(err){
                console.log('Error in finding user --------> Passport');
                return done(err)
            }

            if(!user || user.password != password){
                console.log('Invalid Detail');
                // no error but authentication failed
                return done(null, false)
            }
            // if authentication successfull then send the user's data
            return done(null, user);
        })
    }
))

// serializing the user to decide which key is to be kept in the cookies

passport.serializeUser(function(user,done){
    // automatically encrypted the cookie
    done(null, user.id);
})

// deserializing the user from the key in the cookies

passport.deserializeUser(function(id,done){
    User.findById(id,function(err, user){
        if(err){
            console.log('Error in finding user --------> Passport');
            return done(err)
        }
        return done(null, user);
    })
})

// check if the user is authenticated
// Using the function as a middleware
passport.checkAuthentication = function(req,res,next){
    // if the user is signed in,then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        return next();
    }
    // if the user is not signed in
    return res.redirect('/users/sign-in');
}

//this function  is used to get whether the user is signed in or not
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user
    }
    next();
}
module.exports = passport;