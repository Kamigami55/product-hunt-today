#!/usr/bin/env zx

// To run this script to fetch today featured products:
// yarn fetch
// or specify a date:
// yarn fetch 2020/01/01

// eslint-disable-next-line import/no-unresolved
import 'zx/globals'
import 'dotenv/config'

import prettier from 'prettier'

/* eslint-disable no-undef */
$.verbose = false

const dateArg = argv['_']?.[1] || new Date().setDate(new Date().getDate() - 1)
const postedAfterDate = new Date(dateArg)
postedAfterDate.setHours(0, 0, 0, 0)
const postedBeforeDate = new Date(postedAfterDate)
postedBeforeDate.setDate(postedAfterDate.getDate() + 1)

const res = await fetch('https://api.producthunt.com/v2/api/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_PRODUCT_HUNT_API_KEY,
  },
  body: JSON.stringify({
    query: `
        {
          posts(first: 5, order: RANKING, featured: true, postedBefore: "${postedBeforeDate.toISOString()}", postedAfter: "${postedAfterDate.toISOString()}") {
            edges {
              node {
                name
                slug
                tagline
                description
                thumbnail {
                  url
                  videoUrl
                }
                media {
                  type
                  url
                  videoUrl
                }
                votesCount
                commentsCount
                topics {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
    `,
  }),
})
const json = await res.json()
const products = json.data.posts.edges
  .map((edge) => edge.node)
  .map((product, index) => {
    return {
      name: product.name,
      tagline: product.tagline,
      rank: index + 1,
      thumbnail: product.thumbnail?.url,
      votesCount: product.votesCount,
    }
  })

console.log(products)

fs.writeFileSync(
  path.resolve(__dirname, 'today.json'),
  prettier.format(JSON.stringify(products), { parser: 'json' })
)
