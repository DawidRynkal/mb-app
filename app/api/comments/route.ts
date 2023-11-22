import { GraphQLClient, gql } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const tokenHypo = process.env.HYPOGRAPH_TOKEN;

export const POST = async (req: NextRequest) => {
  const newReq = await req.json();

  const hygraph = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${tokenHypo}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    await hygraph.request(query, newReq);

    return NextResponse.json({ message: "Comment POST failed" });
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" });
  }
};
