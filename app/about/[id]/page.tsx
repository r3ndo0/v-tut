"use client";

import Post from "@/types/post";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function SinglePost({ params }: { params: { id: string } }) {
  const { data: post, isLoading } = useQuery(`post-id-${params.id}`, () =>
    axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  );
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <p>{post?.data.body}</p>
      <p className="text-7xl">{post?.data.id}</p>
    </div>
  );
}

export default SinglePost;
