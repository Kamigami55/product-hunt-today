#!/usr/bin/env zx

import 'zx/globals';
import 'dotenv/config';

/* eslint-disable no-undef */
$.verbose = false;

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
          posts(first: 10, order: VOTES, featured: true, postedBefore: "2022-03-05T00:00:00Z", postedAfter: "2022-03-04T00:00:00Z") {
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
});
const json = await res.json();
const products = json.data.posts.edges
	.map((edge) => edge.node)
	.map((product) => {
		return {
			name: product.name,
			tagline: product.tagline,
		};
	});

console.log(products);
