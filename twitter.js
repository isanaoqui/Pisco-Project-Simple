var twitter = require('twitter')

// var client = new twitter({
//   consumer_key: process.env.CONSUMER_KEY,
//   consumer_secret: process.env.CONSUMER_SECRET,
//   access_token_key: process.env.ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.ACCESS_TOKEN_SECRET
// })

exports.client = new twitter({
  consumer_key: 'joNEHfMcreL7v10Z5zTWmjA36',
  consumer_secret: 'y5wcFyQ6iIcz5t7Rxrh5Cow33deam9tyXwUvLjI9KAQcvR4qqN',
  access_token_key: '293288330-INSIHmI4xrqpHSbnt1vsu3iS9qwp5NuLiBPWoU2J',
  access_token_secret: 'KOD7Nfk0ZgRBVOTjqZiMyQgo5bnGFO4pQ54jF1EcPrlaa'
})

exports.searchPeru = 'pisco peru'
exports.searchChile = 'pisco chile'
