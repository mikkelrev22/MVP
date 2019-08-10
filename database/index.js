//connection to Mongo DB model

const mongoose = require('mongoose')
const mongoUri = 'mongodb://localhost/items'
const db = mongoose.connect(mongoUri)
module.exports = db;