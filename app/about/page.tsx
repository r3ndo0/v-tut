"use client";

import PostCard from "@/components/Home/PostCard";
import { createTodo } from "@/hooks/useCreateTodo";
import Post from "@/types/post";
import axios from "axios";
import React, { use, useRef, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

function about() {
  const { data: posts, isLoading } = useQuery("posts", () =>
    axios.get<Post[]>("http://localhost:3000/api/get-todos")
  );
  const queryClient = useQueryClient();
  const refId = useRef<HTMLInputElement>(null);
  const refTitle = useRef<HTMLInputElement>(null);
  const refBody = useRef<HTMLTextAreaElement>(null);
  const refUserId = useRef<HTMLInputElement>(null);
  console.log("asfasdf");
  const formSubmitter = async (e: any) => {
    e.preventDefault();

    const res = await createTodo({
      body: refBody.current?.value,
      title: refTitle.current?.value ?? "",
      id: refId.current?.value ?? "",
      userId: refId.current?.value ?? "",
    });
    if (res.status === 200) {
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
            // onChange={(e) => setTitle(e.target.value)}
            ref={refTitle}
          />
        </div>
        <div>
          <label>Id</label>
          <input
            ref={refId}
            className="border border-gray-500 rounded-[10px] p-3 my-2"
          />
        </div>
        <div>
          <label>User Id</label>
          <input
            ref={refUserId}
            className="border border-gray-500 rounded-[10px] p-3 my-2"
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            className="border border-gray-500 rounded-[10px] p-3 my-2"
            ref={refBody}
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
