const mongoose = require('mongoose')

let Schema = mongoose.Schema

let Quote = new Schema({
  quote: String,
  author: String
})

module.exports = mongoose.model('Quote', Quote)