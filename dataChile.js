const twitter = require('./twitter')
const client = twitter.client
var searchChile = twitter.searchChile

client.get('search/tweets', {q: searchChile}, function(error, tweets, response) {
  if(error) throw error
  console.log(tweets.statuses.length)
})
