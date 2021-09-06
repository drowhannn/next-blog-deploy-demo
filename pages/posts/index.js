import React from "react";
import axios from "axios";
import PreviewPost from "../../components/PreviewPost";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PreviewPost post={post} />
      ))}
    </div>
  );
}

export default Posts;

export async function getStaticProps() {
  const postsRes = await axios.get("http://localhost:1337/posts");

  return {
    props: {
      posts: postsRes.data,
    },
  };
}
