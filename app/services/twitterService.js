let config = require('../../config')
let Twit = require('twit')

exports.getTwit = () => {
  return new Twit({
    consumer_key: config.twitterConsumerKey,
    consumer_secret: config.twitterConsumerSecret,
    access_token: config.twitterAccessToken,
    access_token_secret: config.twitterAccessTokenSecret
  })
}