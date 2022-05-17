const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'You must provide a username.'], 
        unique: true
    },
    password: {
        type: String,
        require: [true, 'You must provide a password.']
    },
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User