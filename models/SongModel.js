const mongoose = require('mongoose')

const SongSchema = mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    releaseYear : String,
    genre: String
},
{
    timestamps : true
})

module.exports = mongoose.model('Song', SongSchema)
