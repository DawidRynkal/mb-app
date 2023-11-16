import { PostCard } from "@/components";
import { getPosts } from "@/services";
import Image from "next/image";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((singlePost) => (
          <PostCard node={singlePost.node} />
        ))}
      </div>
    </div>
  );
}
