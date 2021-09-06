import React from "react";
import Link from "next/link";

function PreviewPost({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="previewPost">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </Link>
  );
}

export default PreviewPost;
