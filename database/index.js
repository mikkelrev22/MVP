//connection to Mongo DB model

const mongoose = require('mongoose')
const mongoUri = 'mongodb://localhost/items'
mongoose.connect(mongoUri, {useNewUrlParser: true })
const db = mongoose.connection


module.exports = db


