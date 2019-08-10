const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 3636

app.use(morgan())
app.use(bodyParser())

//server static files

//GET request to MongoDB model

app.listen(port, ()=> {
  console.log(`now listening on port ${port}!`)
})