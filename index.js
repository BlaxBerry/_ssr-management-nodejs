const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// create HTTP server
const app = express()

// session
const session = require('express-session')

// bodyParser 
app.use(bodyParser.urlencoded({ extended: false }))

// session
app.use(session({secret:'secret key'}))


// MongoDB
require('./model/connect')

// static 
app.use(express.static(path.join(__dirname, 'public')))

// Router
const home = require('./route/home')
const admin = require('./route/admin')
app.use('/home', home)
app.use('/admin', admin)

// art-template
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')
app.engine('art', require('express-art-template'))



app.listen(80, () => {
    console.log('Server running at http://localhost:80');
})