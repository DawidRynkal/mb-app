import { getPostsServer } from "@/services/postsQuery";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const usePostsFetch = (skip: number) => {
  const [postsState, setPostsState] = useState<any[]>([]);
  const { data, isFetching, error, isLoading } = useQuery({
    queryKey: ["posts", skip],
    queryFn: ({ queryKey }) => getPostsServer(queryKey[1] as number),
  });
  return { data, isFetching, error, isLoading };
};

export default usePostsFetch;
