const express = require('express')

const home = express.Router()

// home page articles list
home.get('/', require('./home/index'))

// article detail
home.get('/article', require('./home/articleDetail'))

module.exports = home