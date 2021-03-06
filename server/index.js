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
  console.log(req.path);
  
  tftItem.find({combo: {$in: req.params.itemName}}, (err, data)=>{
    if (err) return next(err)
    res.status(200).send(data)
  })
})

app.use((req, res, next) => {
  res.send(404)
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.stack)
})

app.listen(port, ()=> {
  console.log(`now listening on port ${port}!`)
})