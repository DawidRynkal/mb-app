"use client";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";
import { getPostsServer } from "@/services/postsQuery";
import Loader from "./Loader";
import { EdgeProps } from "@/types";

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
          <h3>Something went wrong, try later...</h3>
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
        <button
          onClick={handleShowMore}
          className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Show more
        </button>
      )}
    </>
  );
};

export default PostCardsWrapper;
