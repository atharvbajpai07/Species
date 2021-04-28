const mongoose = require('mongoose')

const SpeciesSchema = {
    Species   : String,
    date : String,
    location : Number
}

const Article = mongoose.model('speciesSightData', SpeciesSchema)

module.exports = Article