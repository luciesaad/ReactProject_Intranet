const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            unique: false
        }
    },
    { timestamps: true }
)


userSchema.methods.checkPassword = function(password) {
    console.log('in check password')
    const passwordHash = this.password
    //return new Promise((resolve, reject) => {
        if(passwordHash !== password) {
            return false
        }
        return true
        /*bcrypt.compare(password, passwordHash, (err, same) => {
            if (err) {
                return reject(err)
            }
            resolve(same)
        })*/
    //})
}
const User = mongoose.model('users', userSchema)
module.exports = User