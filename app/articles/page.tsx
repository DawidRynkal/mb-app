import { PostCard } from "@/components";
import WorkersWidget from "@/components/WorkersWidget";
import { getPosts } from "@/services";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="lg:container mx-auto lg:pr-10 mb-8 max-w-5xl">
      <div className="grid grid-cols-1">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((singlePost) => (
            <PostCard key={singlePost.node.slug} node={singlePost.node} />
          ))}
        </div>
      </div>
    </div>
  );
}
