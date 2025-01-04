import React from 'react';
import { useFetchUsers } from '../hooks/useFetch';
import UserCard from '../components/UserCard';
const HomePage: React.FC = () => {
  const { users, loading } = useFetchUsers();
  if (loading) return <p className="text-center">Loading...</p>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
