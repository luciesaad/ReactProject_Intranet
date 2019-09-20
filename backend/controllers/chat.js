const User = require('../models/user.model')
const Message = require('../models/message.model')

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

module.exports = {
    saveMessage: saveMessage,
}