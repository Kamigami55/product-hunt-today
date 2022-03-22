# Product Hunt Today

<img alt="Product Hunt Today Twitter account" src="https://user-images.githubusercontent.com/8737381/159538213-f5763a39-e12e-4613-af9d-674ab0ce83f0.png">

A Twitter bot [@ProductHunToday](https://twitter.com/ProductHunToday) that tweet trending [Product Hunt](https://www.producthunt.com/) products every day, in short video!

## Tech stack

- [Remotion](https://www.remotion.dev/): Generate short video in React!
- [Product Hunt API 2.0 (GraphQL)](https://api.producthunt.com/v2/docs): Fetch trending products
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api): Tweet post thread with video
- [Tailwind CSS](https://tailwindcss.com/): UI of video content
- [Github Actions](https://github.com/features/actions): Run scheduled job everyday (fetch data from Product Hunt -> generate video -> post Twitter)
- [google/zx](https://github.com/google/zx): Write modern shell script in JavaScript

## Sample tweet

https://twitter.com/ProductHunToday/status/1506186218714849287

<img alt="Twitter post from Product Hunt Today" src="https://user-images.githubusercontent.com/8737381/159538226-27f92c63-b072-4dde-a1f9-865d7df3b8e8.png">

## Get started

### Install dependencies

```console
yarn install
```

### Setup environment variables

Create `.env` file, with your [Product Hunt](https://api.producthunt.com/v2/docs) & [Twitter](https://developer.twitter.com/en/docs/twitter-api) API key

```env
REACT_APP_PRODUCT_HUNT_API_KEY="<your-key>"
TWITTER_CONSUMER_KEY="<your-key>"
TWITTER_CONSUMER_SECRET="<your-key>"
TWITTER_ACCESS_TOKEN_KEY="<your-key>"
TWITTER_ACCESS_TOKEN_SECRET="<your-key>"
```

### Fetch products

This will call Product Hunt API, and store result in `<ProjectRoot>/data/today.json`

```console
yarn fetch
```

### Start preview

This will open browser to preview video

```console
yarn start
```

### Render video

This will store generated video in `<ProjectRoot>/out/video.mp4`

```console
yarn build
```

### Post to Twitter

```console
yarn post-tweet
```
