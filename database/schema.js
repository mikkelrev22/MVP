//Mongo DB model schema

const mongoose = require('mongoose')

const tftItemSchema = new mongoose.Schema({
  itemName: String,
  combo: Array,
  description: String
})

const tftItem = mongoose.model('tftItem', tftItemSchema, 'tftItemz')
module.exports= tftItem;