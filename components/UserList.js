import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://20.244.56.144/test/users")
      .then((response) => response.json())
      .then((data) => {
        
        const userArray = Object.entries(data).map(([id, name]) => ({
          id: parseInt(id),
          name,
        }));
        userArray.sort((a, b) => a.id - b.id); 
        setUsers(userArray);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Registered Users</h2>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <ul className="list-disc ml-5">
          {users.map((user) => (
            <li key={user.id}>
              {user.id}. {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
