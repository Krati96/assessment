import React from 'react';

const UserDetails = ({ user }) => (
  <div>
    <h2>User Details</h2>
    <p>ID: {user.id}</p>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    <p>Role: {user.role}</p>
    <button>Edit</button>
  </div>
);

export default UserDetails;
