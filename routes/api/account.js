const User = require('../../models/user');
const UserSession = require('../../models/userSession');
const bcrypt = require('bcryptjs');
let router = require("express").Router();

// Begining of the sign up function
router.route('/signup').post ((req, res, next) => {

    console.log("WE ARE HERE")

    const { body } = req;
    let {
        // firstName,
        // lastName, 
        username,
        password
    } = body;

    let {
        // username,
        email
    } = body;


    // if (!firstName) {

    //     res.send({
    //         success: false,
    //         message: 'Error: First name cannot be blank'
    //     });
    //     next("Error, invalid name")
    // } if (!lastName) {
    //     res.send({
    //         success: false,
    //         message: 'Error: Last name cannot be blank'
    //     });
    //     next("Error, invalid last name")
    // } 


    if (!username) {
        // we need to return res.send since the vaule of the application is trying to send and render at the same time causing us to get this error
        //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
        res.send({
            success: false,
            message: 'Error: Username cannot be blank'
        });
        return next("Error, invalid username")
    }
    if (!email) {
        res.send({
            success: false,
            message: 'Error: Email cannot be blank'
        });
        return next("Error, invalid email")
    }
    if (!password) {
        res.send({
            success: false,
            message: 'Error: Password name cannot be blank'
        });
        return next("Error, invalid password")
    }
    console.log(body)
    email = email.toLowerCase();
    // steps:
    // 1. verify email doesnt exist
    // 2. save it
    console.log("here")


    //creating a new user while checking to see if there is another dublipcate of that user.
    User.find({
        email: email,
        username: username
    }, (err, previousUsers, users) => {
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
        let newUser = new User();

        newUser.email = email;
        newUser.username = username;
        // newUser.firstName = firstName;
        // newUser.lastName = lastName;
        //newUser.password = newUser.generateHash(password);
        newUser.password = password;
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
    });
});

router.route('/signin').post  ((req, res, next) => {
    const { body } = req;
    const {
        password,
    } = body;

    let {
        email
    } = body;


    if (!email) {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank'
        });

    } if (!password) {
        return res.send({
            success: false,
            message: 'Error: Password name cannot be blank'
        });
    }
    email = email.toLowerCase();
   
    User.find({
        email: email
    }, (err, users) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: server error'
            });
        }
        if (users.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }
        const user = users[0];
        if (!user.validPassword(password)) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }

        // Otherwise correct user
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if (err) {
                console.log(err)
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }

            return res.send({
                success: true,
                message: 'Valid sign in',
                token: doc._id
            })
        });



    });

     //Creating the login auth funtion for the sigin page
     User.getAuthenticated(email, password, function (err, userPer, reason) {
        if (err) throw err;

        // login was successful if we have a user
        if (userPer) {
            // handle login success
            console.log('login success');
            return;
        }

        // otherwise we can determine why we failed
        var reasons = User.failedLogin;
        switch (reason) {
            case reasons.NOT_FOUND:
            case reasons.PASSWORD_INCORRECT:
                // note: these cases are usually treated the same - don't tell
                // the user *why* the login failed, only that it did
                break;
            case reasons.MAX_ATTEMPTS:
                // send email or otherwise notify user that account is
                // temporarily locked
                break;
        }



    });


});

router.route('/verify').get ( (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test
    // Verify the token is one of a kind and it's not deleted.
    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            console.log(err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        } else {
            // DO ACTION
            return res.send({
                success: true,
                message: 'Good'
            });
        }
    });
})

router.route('/logout').get ((req, res, next) => {
    // Get the token 
    const { query } = req;
    const { token } = query;
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
            console.log(err)
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }

        return res.send({
            success: true,
            message: 'Good'
        });

    });

});

module.exports = router;
