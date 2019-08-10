const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 3636

app.use(morgan('dev'))
app.use(bodyParser.json())

//server static files

//GET request to MongoDB model

app.listen(port, ()=> {
  console.log(`now listening on port ${port}!`)
})