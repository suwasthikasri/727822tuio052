import React, { useState, useEffect } from "react";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://your-api-url.com/posts");
      const data = await response.json();
      const sortedPosts = data.sort((a, b) => b.comments.length - a.comments.length);
      const maxComments = sortedPosts[0]?.comments.length || 0;
      const trendingPosts = sortedPosts.filter(post => post.comments.length === maxComments);
      setPosts(trendingPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md p-4 mb-2 rounded">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
          <p className="text-sm text-gray-500">Comments: {post.comments.length}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
