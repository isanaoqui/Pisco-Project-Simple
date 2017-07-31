const twitter = require('./twitter')

const client = twitter.client
var searchChile = twitter.searchChile

client.stream('statuses/filter', {track: searchChile}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text)
  })
  stream.on('error', function(error) {
    console.log("ERR!")
  })
})
