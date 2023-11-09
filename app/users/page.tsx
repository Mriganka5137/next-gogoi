import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";
interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="text-secondary-content">
      <div className=" flex justify-between items-center">
        <h1 className="">Users</h1>
        <Link href="/users/new-users" className=" btn btn-neutral">
          New User
        </Link>
      </div>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default Users;
