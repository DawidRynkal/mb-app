"use client";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";
import { getPostsServer } from "@/services/postsQuery";
import Loader from "./Loader";
import { EdgeProps } from "@/types";
import { CustomButton, ErrorFetch } from ".";

const PostCardsWrapper = () => {
  const [loadedData, setLoadedData] = useState<EdgeProps[]>([]);
  const [postsNum, setPostsNum] = useState<number>(1);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts", postsNum],
    queryFn: async ({ queryKey }) =>
      await getPostsServer(queryKey[1] as number),
  });

  useEffect(() => {
    if (data) {
      setLoadedData(data.edges);
    }
  }, [data]);

  const handleShowMore = () => {
    setPostsNum((prev) => prev + 1);
  };

  return (
    <>
      <div className="grid grid-cols-1">
        {isError ? (
          <ErrorFetch errorMessage="Something went wrong, try later..." />
        ) : (
          <div className="col-span-1 lg:col-span-8">
            {loadedData.map((singlePost) => (
              <PostCard key={singlePost.node.slug} node={singlePost.node} />
            ))}
          </div>
        )}
      </div>
      {isLoading && <Loader />}
      {data?.pageInfo.hasNextPage && (
        <CustomButton btnText="Show more" handleClick={handleShowMore} />
      )}
    </>
  );
};

export default PostCardsWrapper;
