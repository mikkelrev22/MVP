const tftItem = require('.schema/js')
const {dataArray} = require('./data.js')
const seed = ()=>{
  tftItem.create(dataArray)
  .then(()=>db.close())
  .catch((error)=>{if (error)
    console.log(error)})
}  
seed();