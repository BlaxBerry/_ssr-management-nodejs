const express = require('express')
const path = require('path')
// body-paser
const bodyParser = require('body-parser')
// MongoDB
require('./model/connect')
// Router
const home = require('./route/home')
const admin = require('./route/admin')
// session
const session = require('express-session')

// create HTTP server
const app = express()

// bodyParser 
app.use(bodyParser.urlencoded({ extended: false }))

// session
app.use(session({ secret: 'secret key' }))

// static 
app.use(express.static(path.join(__dirname, 'public')))

// login interception
app.use('/admin', require('./middleware/loginGuard'))

// Router
app.use('/home', home)
app.use('/admin', admin)

// art-template
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')
app.engine('art', require('express-art-template'))



app.listen(80, () => {
    console.log('Server running at http://localhost:80');
})