"use server";

import { QueryPostsResultProps } from "@/types";
import { request, gql } from "graphql-request";

const grapqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getPostsServer = async (currentPostsAmount: number) => {
  const query = gql`
    query MyQuery($currentPostsAmount: Int!) {
      postsConnection(first: $currentPostsAmount) {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              slug
              category
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `;

  const results: QueryPostsResultProps = await request(grapqlAPI, query, {
    currentPostsAmount,
  });

  return results.postsConnection;
};
