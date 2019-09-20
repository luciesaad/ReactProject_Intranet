const User = require('../models/user.model');
const jwt = require('jsonwebtoken')

function createJWT(user) {
    return jwt.sign({ id: user.id }, process.env.JWT_DEV_ENV_SECRET, {
        expiresIn: process.env.JWT_DEV_ENV_EXP
    })
}

const signup = (req, res) => {

    const user = new User();
    user.email = req.body.signupData.newUserName;
    user.password = req.body.signupData.newUserPassword;
    user.isAdmin = req.body.signupData.newIsAdmin;

    user.save(function (err, user) {
        if (err) {
            console.log(err);
            return res.status(500).end()
        } else {
            console.log('we saved following: ' + user)
        }
    })
};

const login = async (req, res) => {
    console.log('inuti login fn');
    const user = await User.findOne({email: req.body.loginData.userName}).exec();

    if (!user) {
        return res.status(400).send({ message: 'invalid combination' })
    }
    const matchingPasswords = await user.checkPassword(req.body.loginData.passName);
    if (!matchingPasswords) {
        console.log('invalid combination')
        return res.status(400).send({ message: 'invalid combination' })
    }

    const name = req.body.loginData.userName;
    const administrator = user.isAdmin;
    console.log(administrator);
    const signedJWT = createJWT(user);
    return res.status(201).send({signedJWT, administrator, name})
};

module.exports = {
    signup: signup,
    login: login
};