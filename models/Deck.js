const mongoose = require('mongoose')

const deckSchema = new mongoose.Schema({
    deckname: {
        type: String,
        required: true,
    },
    description: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true})

const Deck = mongoose.model('Deck', deckSchema)

module.exports = Deck