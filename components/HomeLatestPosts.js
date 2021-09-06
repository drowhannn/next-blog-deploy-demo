import React, { useState, useEffect } from "react";
import PreviewPost from "./PreviewPost";

function HomeLatestPosts({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5));
    console.log(latestPosts);
  }, []);

  return (
    <div className="latestPosts">
      {latestPosts.map((latestPost) => (
        <PreviewPost post={latestPost} />
      ))}
    </div>
  );
}

export default HomeLatestPosts;
