const twitter = require('./twitter')
const client = twitter.client
var searchChile = twitter.searchChile
// var numChile = 0

client.get('search/tweets', {q: searchChile}, function(error, tweets, response) {
  if(error) throw error
  exports.numChile = tweets.statuses.length
  console.log("chile: " + tweets.statuses.length)
})

// exports.numChile = numChile
