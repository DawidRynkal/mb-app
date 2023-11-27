import { Comments, CommentsForm, PostDetail } from "@/components";
import Author from "@/components/Author";
import { getPostDetails, getConnectedComments } from "@/services";
import { useRouter } from "next/router";
import React from "react";

const PostDetails = async ({ params }: { params: { slug: string } }) => {
  const postDetails = await getPostDetails(params.slug);
  const postComments = await getConnectedComments(params.slug);

  return (
    <>
      <div className="container mx-auto px-10 mb-8 max-w-5xl">
        <div className="grid grid-cols-1">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={postDetails} />
            <Author
              name={postDetails.author.name}
              bio={postDetails.author.bio}
              photo={postDetails.author.photo}
              id={postDetails.author.id}
            />
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            <CommentsForm slug={postDetails.slug} />
            <Comments postComments={postComments} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
