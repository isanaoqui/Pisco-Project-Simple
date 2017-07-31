const twitter = require('./twitter')
const client = twitter.client
var searchPeru = twitter.searchPeru

client.get('search/tweets', {q: searchPeru}, function(error, tweets, response) {
  if(error) throw error

  console.log(tweets.statuses.length)
})
