import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { User } from '../types/User';
import axios from 'axios';
const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);
  if (loading) return <p className="text-center">Loading...</p>;
  if (!user) return <p className="text-center">User not found</p>;
  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 mb-4 inline-block">
        ← Back to Users
      </Link>
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <p className="text-lg">@{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>
        Address: {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};
export default UserDetailsPage;
