const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user.model');

const messageSchema = new Schema(
    {
        from: { type: Schema.Types.ObjectId, ref: 'User'},
        message: {
            type: String,
            required: true,
            unique: false
        },
        topic: {
            type: String,
            required: true,
            unique: false
        }
    },
    { timestamps: true }
);

const Message = mongoose.model('messages', messageSchema);
module.exports = Message;
