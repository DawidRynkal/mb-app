import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import favicon from "../app/favicon.ico";

const relatedPosts = [{ title: "title 1" }, { title: "title 2" }];

const PostWidget = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {1 ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt="image"
              height={60}
              width={60}
              unoptimized
              className="align-middle rounded-full"
              src={favicon}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              01.01.2024
              {/* {moment(post.createdAt).format('MMM DD, YYYY')} */}
            </p>
            <Link href={`/person`} className="text-md" key={index}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
