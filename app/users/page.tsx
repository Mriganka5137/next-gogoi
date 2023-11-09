import React from "react";
import UserTable from "./UserTable";
interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="text-secondary-content">
      <h2 className=" text-3xl font-bold">Users</h2>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default Users;
