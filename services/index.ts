import {
  QueryPostsResultProps,
  QueryPostDetailsResultProps,
  CommentPostType,
} from "@/types";
import { request, gql } from "graphql-request";

const grapqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
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
      }
    }
  `;

  const resluts: QueryPostsResultProps = await request(grapqlAPI, query);

  return resluts.postsConnection.edges;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query getDetails($slug: String!) {
      post(where: { slug: $slug }) {
        excerpt
        title
        featuredImage {
          url
        }
        author {
          bio
          name
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          slug
          category
        }
      }
    }
  `;

  const result: QueryPostDetailsResultProps = await request(grapqlAPI, query, {
    slug,
  });

  return result.post;
};

export const submitComment = async (obj: CommentPostType) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result;
};
