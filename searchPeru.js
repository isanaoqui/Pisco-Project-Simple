const twitter = require('./twitter')

const client = twitter.client
var searchPeru = twitter.searchPeru

client.stream('statuses/filter', {track: searchPeru}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet)
  })
  stream.on('error', function(error) {
    console.log("ERR!")
  })
})
