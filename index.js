const express = require('express')
const app = express()


// Router
const home = require('./route/home')
const admin = require('./route/admin')
app.use('/home', home)
app.use('/admin', admin)




app.listen(80, () => {
    console.log('Server running at http://localhost:80');
})