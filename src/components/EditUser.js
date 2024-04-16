import React from 'react';
import { useForm } from 'react-hook-form';

const EditUser = ({ user }) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: user
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <input type="text" name="username" ref={register({ required: true })} />
          {errors.username && <span>Username is required</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Email is required</span>}
        </label>
        <label>
          Role:
          <select name="role" ref={register}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
