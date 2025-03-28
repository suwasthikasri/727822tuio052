import React, { useState, useEffect } from "react";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://your-api-url.com/users");
      const data = await response.json();
      const userPostCounts = data.map(user => ({
        id: user.id,
        name: user.name,
        posts: user.posts.length
      }));
      const sortedUsers = userPostCounts.sort((a, b) => b.posts - a.posts).slice(0, 5);
      setUsers(sortedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="bg-white shadow-md p-4 mb-2 rounded">
            {user.name} - {user.posts} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
