const request = require('request');

const config = require('../../config')

let Quote = require('../models/quote')

/**
 * 
 */
exports.uploadStatusToPage = (req, res) => {
  Quote.find({}, function (err, quotes) {
    if (err) res.send(err)

    quotes.slice(70, 73).map(i => {
      console.log('"' + i.quote + '"' + '\n' + '- ' + i.author)
      status = '"' + i.quote + '"' + '\n' + '- ' + i.author

      request.post(config.fbPageStatusUploadUrl + config.fbPageAccessToken,
        {
          json: { message: status }
        }, function (error, response, body) {
          if (error) console.log(error)

          if (!error) {
            console.log("Status code: " + response.statusCode)
            console.log(body)
          }
        })
    })

  })

  res.send("success")
}