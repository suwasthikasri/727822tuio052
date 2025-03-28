import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Social Media Analytics</h1>
      <div className="space-y-4">
        <Link to="/top-users" className="block px-6 py-3 bg-blue-500 text-white rounded-lg shadow">
          Top Users
        </Link>
        <Link to="/trending-posts" className="block px-6 py-3 bg-green-500 text-white rounded-lg shadow">
          Trending Posts
        </Link>
        <Link to="/feed" className="block px-6 py-3 bg-purple-500 text-white rounded-lg shadow">
          Live Feed
        </Link>
      </div>
    </div>
  );
};

export default Home;
