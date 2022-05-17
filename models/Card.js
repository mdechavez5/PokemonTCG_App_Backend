const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    cardName: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true})

const Deck = mongoose.model('Deck', deckSchema)

module.exports = Deck