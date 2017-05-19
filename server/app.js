var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.json({a:1})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})