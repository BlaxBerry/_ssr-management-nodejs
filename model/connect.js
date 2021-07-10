// mongoose
const mongoose = require('mongoose')
// connect to mongoseDB
mongoose.connect('mongodb://localhost/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => { console.log('OK,Succeed in connecting to blog in MongoDB') })
    .catch(() => { console.log('Error,Failed to connect to blog in MongoDB') })