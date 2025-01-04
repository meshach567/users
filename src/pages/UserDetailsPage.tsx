import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const UserDetails: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default UserDetails;
