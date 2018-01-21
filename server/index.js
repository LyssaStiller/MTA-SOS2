const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 1337
const app = express()
module.exports = app

  //logging middleware
app.use(morgan('dev'))

  // body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// app.use('/api', require('./api'))

  // static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))


app.get('*', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})


// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
  })



app.listen(PORT, function() {
  console.log("The server is listening closely on port", PORT)
})
  // db
  //   .sync()
  //   .then(function() {
  //     console.log("Synchronated the database");
  //   })
  //   .catch(function(err) {
  //     console.error("Trouble right here in River City", err, err.stack);
  //   });
// });



// const db = require('./db')
// const socketio = require('socket.io')
