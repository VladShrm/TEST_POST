"use client";

import React, { useState } from "react";
import { IPost } from "../../../interface/IPosts";
import { Icon } from "@iconify-icon/react";
import { useSearchParams } from "next/navigation";

export interface PostItemProps {
  post: IPost;
  onEdit: (post: IPost) => void;
  onDelete: (postId: number) => void;
  onComments: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onEdit, onDelete, onComments }) => {
  const [isComment, setIsComment] = useState(false)
  const data = useSearchParams();
  const postId = data.get('id');

  return (
    <>
      <div className="mb-5 w-[850px] p-4 border-2 border-gray-400 rounded-[10px] shadow-sm overflow-auto hover:bg-gray-800 mr-2 transition-colors">
        <h2 className="text-2xl text-gray-50 font-bold capitalize">{post.title}</h2>
        <p className="text-gray-400 line-clamp-4">{post.body}</p>
        {!postId ? (
          <div className="flex justify-end">
            <button
              onClick={() => onEdit(post)}
              className="flex items-center justify-center text-white py-1 px-2 rounded-md hover:bg-gray-700"
            >
              <Icon
                icon="uil:edit"
                width="25px"
                height="30px"
                className="text-gray-400"
              />
            </button>
            <button
              onClick={() => onComments(post)}
              className="flex items-center justify-center text-white py-1 px-2 rounded-md hover:bg-gray-700"
            >
              <Icon
                icon="uil:comment"
                width="25px"
                height="30px"
                className="text-gray-400"
              />
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="flex items-center justify-center text-white py-1 px-2 rounded-md hover:bg-gray-700"
            >
              <Icon
                icon="bi:trash"
                width="25px"
                height="30px"
                className="text-red-600"
              />
            </button>

          </div>
        ) : null}
      </div>
      {isComment && postId ? (
        <div>

        </div>
      )
        : postId && !isComment ?
          (<p className="text-gray-50 flex justify-center text-xl ">This post has no comments yet</p>)
          : null
      }
    </>
  );
};

export default PostItem;
