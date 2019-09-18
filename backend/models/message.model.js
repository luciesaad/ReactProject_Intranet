const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
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

/*userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next()
    }

    bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
            return next(err)
        }
        this.password = hash
        next()
    })
})*/


const Message = mongoose.model('messages', messageSchema);
module.exports = Message;
