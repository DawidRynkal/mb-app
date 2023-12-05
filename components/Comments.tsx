import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { GetCommentsType } from "@/types";

interface CommentsProps {
  postComments: GetCommentsType[];
}

const Comments = ({ postComments }: CommentsProps) => {
  return (
    <>
      {postComments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {postComments.length} Comments
          </h3>
          {postComments.reverse().map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>{" "}
                {moment(comment.createdAt).format("MM.DD.YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
