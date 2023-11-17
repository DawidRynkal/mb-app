import { PostCard } from "@/components";
import { getPosts } from "@/services";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container flex justify-center mx-auto px-10 mb-8">
      <div className="grid grid-cols-1">
        {posts.map((singlePost) => (
          <PostCard key={singlePost.node.slug} node={singlePost.node} />
        ))}
      </div>
    </div>
  );
}
