import React from "react";
import Image from "next/image";
import { AuthorProps } from "@/types";

const Author = ({ name, bio, photo }: AuthorProps) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black">
    <div className="absolute flex justify-center left-0 right-0 -top-14">
      <Image
        unoptimized
        alt={name}
        width={0}
        height={0}
        className="align-middle rounded-full"
        src={photo.url}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{name}</h3>
    <p className="text-white text-ls">{bio}</p>
  </div>
);

export default Author;
