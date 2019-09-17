const User = require('../models/user.model')
const Message = require('../models/message.model')
const jwt = require('jsonwebtoken')

const verifyJWT = token =>
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_DEV_ENV_SECRET, (err, payload) => {
            if (err) return reject(err);
            resolve(payload)
        })
    });
const saveMessage = async (req, res) => {
    const message = new Message(); //create new instance Message
    //get id of the user that sent the message
    const author = await User.findOne({ email: req.body.chatData.from }) //find by sender for later use
        .exec();

    message.from = author._id; //assign user's id to the message (1:N relationship)
    message.message = req.body.chatData.msg;
    message.topic = req.body.chatData.topic;

    message.save()
        .then((res) => {
            User.findOne({ email: req.body.chatData.from }, (err, user) => {
                if (user) {
                    // The below two line add the newly saved message to
                    // messages array in User
                    user.messages.push(message);
                    user.save();
                    console.log('message saved');
                    console.log('user updated');
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

/*const isAuthorized = async (req, res) => {
    console.log('in isAuthorized')
    const bearer = req.headers.authorization;
    const token = bearer.split('Bearer ')[1].trim();
    let payload;
        try {
            payload = await verifyJWT(token)
        } catch (e) {
            return res.status(500).end()
        }
    const user = await User.findById(payload.id).exec();

    if (!user) {
        return res.status(500).end()
    }
    req.user = user;
    next()
}*/

module.exports = {
    saveMessage: saveMessage,
    //isAuthorized: isAuthorized
}