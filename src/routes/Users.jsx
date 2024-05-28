import React from 'react';



const Users = ({users}) => {
  return (
    <>
<h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
    </>
  );
};

export default Users