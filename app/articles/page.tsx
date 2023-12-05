import PostCardsWrapper from "@/components/PostCardsWrapper";
import WorkersWidget from "@/components/WorkersWidget";
import { getPostsServer } from "@/services/postsQuery";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Articles() {
  return (
    <>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky lg:relative lg:top-8 mb-8">
          <WorkersWidget />
        </div>
      </div>
      <div className="lg:container mx-auto lg:pr-10 max-w-5xl">
        <PostCardsWrapper />
      </div>
    </>
  );
}
