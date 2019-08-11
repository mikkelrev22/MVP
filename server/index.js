const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 3636
const tftItem = require('../database/schema.js')


app.use(morgan('dev'))
app.use(bodyParser.json())
//server static files
app.use(express.static(__dirname + '/../client/dist'))


//GET request to MongoDB model
app.get('/items/:itemName', (req, res)=>{
  tftItem.find({}, (err, data)=>{
    if (err) res.status(500)
    res.status(200).send(data)
  })
})

app.listen(port, ()=> {
  console.log(`now listening on port ${port}!`)
})