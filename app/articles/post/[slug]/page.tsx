import {
  Comments,
  CommentsForm,
  PostDetail,
  WorkersWidget,
} from "@/components";
import Author from "@/components/Author";
import { getPostDetails, getConnectedComments } from "@/services";
import React from "react";

const PostDetails = async ({ params }: { params: { slug: string } }) => {
  const postDetails = await getPostDetails(params.slug);
  const postComments = await getConnectedComments(params.slug);

  return (
    <>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky lg:relative lg:top-8 mb-8">
          <WorkersWidget />
        </div>
      </div>
      <div className="lg:container mx-auto lg:pr-10 max-w-5xl">
        <div className="grid grid-cols-1">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={postDetails} />
            <Author
              name={postDetails.author.name}
              bio={postDetails.author.bio}
              photo={postDetails.author.photo}
              id={postDetails.author.id}
            />
            <CommentsForm slug={postDetails.slug} />
            <Comments postComments={postComments} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
