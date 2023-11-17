import { PostDetail } from "@/components";
import { getPostDetails } from "@/services";
import React from "react";

const PostDetails = async ({ params }: { params: { slug: string } }) => {
  const postDetails = await getPostDetails(params.slug);
  return (
    <>
      <div className="container mx-auto px-10 mb-8 max-w-5xl">
        <div className="grid grid-cols-1">
          <div className="col-span-1 lg:col-span-8">
            <p>{postDetails.title}</p>
            <PostDetail post={postDetails} />
            {/* <Author author={post.author} />
          <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
