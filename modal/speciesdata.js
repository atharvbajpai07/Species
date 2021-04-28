const mongoose = require('mongoose')

const SpeciesSchema = {
    name   : String,
    size : Number,
    colour : Number,
    weight : Number
}

const Article = mongoose.model('speciesdata', SpeciesSchema)

module.exports = Article