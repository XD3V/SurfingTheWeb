const User = require('../../models/user');
const UserSession = require('../../models/userSession');

const router = require("express").Router();

router.post('/signup', function (req, res, next) {

    console.log("WE ARE HERE")

    const { body } = req;
    const {
        firstName,
        lastName,
        password
    } = body;

    let {
        email
    } = body;

    if (!firstName) {

        res.send({
            success: false,
            message: 'Error: First name cannot be blank'
        });
        next("Error, invalid name")
    } if (!lastName) {
        res.send({
            success: false,
            message: 'Error: Last name cannot be blank'
        });
        next("Error, invalid last name")
    } if (!email) {
        res.send({
            success: false,
            message: 'Error: Email cannot be blank'
        });
        next("Error, invalid email")
    } if (!password) {
        res.send({
            success: false,
            message: 'Error: Password name cannot be blank'
        });
        next("Error, invalid password")
    }
    email = email.toLowerCase();
    // steps:
    // 1. verify email doesnt exist
    // 2. save it
    console.log("here")
    User.find({
        email: email
    }, (err, previousUsers,users) => {
        if (err) {
            res.send({
                success: false,
                message: 'Error: server error'
            });
            return next(err)
        } else if (previousUsers.length > 0) {
            res.send({
                success: false,
                message: 'Error: Account already exist'
            });
            return next("error, account already exists")
        }
        // Save the new user
        const newUser = new User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {

            // If there is a error with newUser it reports it
            if (err) {
                res.send({
                    success: false,
                    message: 'duplicate account'
                })
                return next(err)
                // If there is no problem with newUser then it send null as no problem.
            } else {
                res.json(user)
                return next(null)
            }
        });
   
     // Once the user signs in they should automatically be signed into a session
     const user = users[0];
     if (!user.validPassword(password)) {
         res.send({
             success: false,
             message: 'Error: Invalid'
         });
         next(null)
      } 
     else {
         res.json( "Your password is vaild" )
         return next(null)
     }

     
     const userSession = new UserSession();
     userSession.userId = user._id;
     userSession.save((err, doc) => {
         if (err) {
             console.log(err)
             res.send({
                 success: false,
                 message: 'Error: server error'
             });
             next(err)
         } else {
             res.send({
                 success: true,
                 message: 'Valid sign in',
                 token: doc._id
             })
             next(null)
         }


     });

    });  
})


router.post('/signin', function (req, res, next) {
    const { body } = req;
    const {
        firstName,
        lastName,
        password
    } = body;

    let {
        email
    } = body;


    if (!email) {
        res.send({
            success: false,
            message: 'Error: Email cannot be blank'
        });

        next("Email Invalid")
        

    } 

    if (!password) {
        res.send({
            success: false,
            message: 'Error: Password name cannot be blank'
        });
        next("Invalid Password")
     }
     else{
        res.json("Your password and email is vaild")
        return next(null)
    }
    email = email.toLowerCase();


    User.find({
        email: email
    }, (err, users) => {
        if (err) {
            res.send({
                success: false,
                message: 'Error: server error'
            });
            next(err)
        }
        if (users.length != 1) {
            res.send({
                success: false,
                message: 'Error: Invalid'
            });
            next("error")
        }
        const user = users[0];
        if (!user.validPassword(password)) {
            res.send({
                success: false,
                message: 'Error: Invalid'
            });
            next(null)
         } 
        else {
            res.json( "Your password is vaild" )
            return next(null)
        }

        // Otherwise correct user
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if (err) {
                console.log(err)
                res.send({
                    success: false,
                    message: 'Error: server error'
                });
                next(err)
            } else {
                res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                })
                next(null)
            }


        });
    });
})

router.post('/verify', function (req, res, next) {
    const { body } = req;
    const { token } = body;
    ///?token=test

    // Verify the token to see if it is one of a kind and that it's not deleted.

    // UserSession.find({
    //     _id: token,
    //     isDeleted: false
    // }, (err, sessions) => {
    UserSession.findById(token, (err, sessions) => {
        if (err) {
            console.log(err);
            res.send({
                success: false,
                message: 'Error: Server error'
            });
            next(err)
        }

        console.log(sessions);
        // if (sessions.length !=1) {

        // Since it is a object not an array use arg === null not arg.length since this staments is for arrays.
        if (sessions === null) {
            res.send({
                success: false,
                message: 'Invaild'
            });
            next(null)
        } else {
            res.send({
                success: true,
                message: 'You have been verified'
            });
            next(null)
        }
    })
})

router.get('/logout', function (req, res, next) {

    // Get the token 
    const { body } = req;
    const { token } = body;
    ///?token=test

    // Verify the token us one of a kind  and it's not deleted.

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set: {
            isDeleted: true
        }
    }, null, (err, sessions) => {
        if (err) {
            res.send({
                success: false,
                message: 'Error: Server error'
            });
            next(err)
        } else {
            res.send({
                success: true,
                message: 'You are logged off'
            });
            next(null)
        }



    });
})

//console.log("I'm api/index.js")
module.exports = router;








/*
module.exports = (app) => {
    // sign up
    app.post('api/account/signup', (req, res, next) => {

    });

    app.post('api/account/signin', (req, res, next) => {

    });

    app.get('api/account/verify', (req, res, next) => {
        // Get the token

    })

    app.get('/api/account/logout', (req, res, next) => {

    });

};
*/