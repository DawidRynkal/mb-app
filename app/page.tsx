import { PostWidget } from "@/components";
import { getPosts } from "@/services";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container flex justify-center mx-auto px-10 mb-8">
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget />
        </div>
      </div>
    </div>
  );
}
