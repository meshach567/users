import React from 'react';
import { User } from '../types/User';
import { Link } from 'react-router';
interface UserCardProps {
  user: User;
}
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <Link to={`/user/${user.id}`}>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          View Details
        </button>
      </Link>
    </div>
  );
};
export default UserCard;
