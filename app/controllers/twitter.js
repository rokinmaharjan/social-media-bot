let config = require('../../config')

let twitterService = require('../services/twitterService')
let Quote = require('../models/quote')

exports.uploadStatus = (req, res) => {
  let Twit = twitterService.getTwit()
  let counter = 0

  Quote.find({}, function (err, quotes) {
    if (err) res.send(err)
    setInterval(() => {
      console.log('Uploading status on twitter')
      let quote = quotes[counter].quote + '\n' + '-' + quotes[counter].author + '\n#quotes #quote'

      while (quote.length > 280) {
        counter++
        quote = quotes[counter].quote + '\n' + '-' + quotes[counter].author + '\n#quotes #quote'
      }
      counter++

      console.log(counter + ' ' + quote + ': ' + quote.length)
      Twit.post(config.twitterStatusUploadEndpoint, { status: quote }, function (err, data, response) {
        console.log('Uploaded status')
      })
    }, 10800000)
  })
  
  // 10800000
  res.send("success")
}


