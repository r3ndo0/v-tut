"use client";

import PostCard from "@/components/Home/PostCard";
import Post from "@/types/post";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const { data: posts, isLoading } = useQuery("posts", () =>
    axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  );

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  return (
    <div className="text-[28px] grid grid-cols-3 gap-5">
      {posts?.data.map((p) => (
        <PostCard
          logger={() => console.log(p.body)}
          body={p.body}
          id={p.id}
          key={p.id}
        />
      ))}
    </div>
  );
}
