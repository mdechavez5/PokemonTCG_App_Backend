const express = require('express')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 4000

require('./config/db.connection')

app.get('/', (req,res) => {
    res.json({
        status: 'ok',
        code: 200,
        body: 'PokemonTCG App Backend',
        response: 'Hitting backend'
    })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))