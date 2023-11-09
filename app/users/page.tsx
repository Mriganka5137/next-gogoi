import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
const Users = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await data.json();
  return (
    <div className="text-secondary-content">
      <h2 className=" text-3xl font-bold">Users</h2>
      <table className=" table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
