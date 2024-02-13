import Link from "next/link";
import React from "react";

function PostCard(props: { body: string; id: number; logger: () => any }) {
  return (
    <article className="border border-gray-500 p-3">
      <h2 className="border-b border-gray-500">{props.body}</h2>
      <p>{props.id}</p>
      <Link href={`/about/${props.id}`}>Log Post Body</Link>
    </article>
  );
}

export default PostCard;
