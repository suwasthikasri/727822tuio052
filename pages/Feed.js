import React, { useState, useEffect } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://your-api-url.com/posts");
      const data = await response.json();
      setPosts(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md p-4 mb-2 rounded">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
