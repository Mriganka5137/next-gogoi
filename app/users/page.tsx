import React from "react";
import UserTable from "./UserTable";

const Users = async () => {
  return (
    <div className="text-secondary-content">
      <h2 className=" text-3xl font-bold">Users</h2>
      <UserTable />
    </div>
  );
};

export default Users;
