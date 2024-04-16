// // UserListPage.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function UserListPage() {
//   const [users, setUsers] = useState([...]); // Initial user list
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 10;
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {currentUsers.map(user => (
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}>{user.username}</Link>
//           </li>
//         ))}
//       </ul>
//       {/* <Pagination
//         usersPerPage={usersPerPage}
//         totalUsers={users.length}
//         paginate={paginate}
//       /> */}
//     </div>
//   );
// }

// export default UserListPage;

// UserList.js
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
