require('dotenv').config()

const path = require('path')

const { TwitterApi } = require('twitter-api-v2')

async function run() {
  const client = new TwitterApi({
    appKey: process.env.TWITTER_CONSUMER_KEY,
    appSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  })

  const mediaIdVideo = await client.v1.uploadMedia(
    path.resolve(__dirname, '../out/video.mp4'),
    { type: 'longmp4' }
  )

  await client.v2.tweet('My tweet text with a test video!!', {
    media: { media_ids: [mediaIdVideo] },
  })
}

run()
