import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => (
  <div>
    <h2>User List</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.username}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
