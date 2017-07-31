const twitter = require('./twitter')
const client = twitter.client
var searchPeru = twitter.searchPeru
// var numPeru = 0

client.get('search/tweets', {q: searchPeru}, function(error, tweets, response) {
  if(error) throw error
  exports.numPeru = tweets.statuses.length
  console.log("peru: " + tweets.statuses.length)
})

// exports.numPeru = numPeru
