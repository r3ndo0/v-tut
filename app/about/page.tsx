"use client";

import PostCard from "@/components/Home/PostCard";
import Post from "@/types/post";
import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";

function about() {
  const { data: posts, isLoading } = useQuery("posts", () =>
    axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  );
  const queryClient = useQueryClient();

  return isLoading ? (
    <>loading...</>
  ) : (
    <div className="text-[28px] grid grid-cols-3 gap-5">
      <button onClick={() => queryClient.invalidateQueries("posts")}>
        Reload Posts
      </button>
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

export default about;
