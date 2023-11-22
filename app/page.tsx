"use client";

import { CommentsForm, PostWidget } from "@/components";
import { submitComment } from "@/services";
import { useEffect } from "react";

export default function Home() {
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
