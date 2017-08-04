var peru = require('./scripts/dataPeru')
var chile = require('./scripts/dataChile')

const express = require('express')
const app = express()
var path = require('path')

app.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname + '/index.html'))
  res.send("Peru: " + peru.numPeru.toString() + "; Chile: " + chile.numChile.toString())
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
