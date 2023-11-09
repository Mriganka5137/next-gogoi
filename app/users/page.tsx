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
      <h1 className="">Users</h1>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default Users;
