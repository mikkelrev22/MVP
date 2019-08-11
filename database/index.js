//connection to Mongo DB model
const {dataArray} = require('./script.js')
const mongoose = require('mongoose')
const tftItem = require('./schema.js')
const mongoUri = 'mongodb://localhost/items'
mongoose.connect(mongoUri, {useNewUrlParser: true })
const db = mongoose.connection


const whatever = ()=>{
  tftItem.create(dataArray)
  .then(()=>db.close())
  .catch((error)=>{if (error)
    console.log(error)})
}  
whatever();
// const insertData = (data) => {
//   tftItem.create(data)
//   .then(()=>db.close())
//   .catch((error)=>{if (error)
//     console.log(error)})
//   }
  


