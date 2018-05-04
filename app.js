const express = require('express')
const app = express()

const config = require('./config')

const mongoose = require('mongoose')
// For mongo atlas
mongoose.connect(config.mongodb, { dbName: 'quoteHouse' })
// mongoose.connect(config.mongodb)


const facebookController = require('./app/controllers/facebook')
const twitterController = require('./app/controllers/twitter')

app.post('/fb/page', facebookController.uploadStatusToPage)
app.post('/twitter/status', twitterController.uploadStatus)



app.listen(process.env.PORT || 8080, () => console.log('Social media bot is running'))