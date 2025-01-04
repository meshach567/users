import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  username: string;
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <Link 
              to={`/user/${user.id}`} 
              className="mt-4 inline-block text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;