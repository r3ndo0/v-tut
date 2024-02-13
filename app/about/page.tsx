"use client";

import PostCard from "@/components/Home/PostCard";
import { createTodo } from "@/hooks/useCreateTodo";
import Post from "@/types/post";
import axios from "axios";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";

function about() {
  const { data: posts, isLoading } = useQuery("posts", () =>
    axios.get<Post[]>("http://localhost:3000/api/get-todos")
  );
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const formSubmitter = async (e: any) => {
    e.preventDefault();
    const res = await createTodo({
      body,
      title,
      id,
      userId,
    });
    if (res.status === 200) {
      setBody("");
      setTitle("");
      setId("");
      setUserId("");
      queryClient.invalidateQueries("posts");
    }
  };

  return isLoading ? (
    <>loading...</>
  ) : (
    <>
      <form className="w-full" onSubmit={(e) => formSubmitter(e)}>
        <div>
          <label>title</label>
          <input
            className="border border-gray-500 rounded-[10px] p-3 my-2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Id</label>
          <input
            className="border border-gray-500 rounded-[10px] p-3 my-2"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label>User Id</label>
          <input
            className="border border-gray-500 rounded-[10px] p-3 my-2"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            className="border border-gray-500 rounded-[10px] p-3 my-2"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button className="px-12 py-3 border border-gray-900" type="submit">
          Submit
        </button>
      </form>
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
    </>
  );
}

export default about;
