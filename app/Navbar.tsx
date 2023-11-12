import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between gap-10">
      <Link href="/" className=" text-md text-secondary">
        Home
      </Link>
      <Link href="/users" className=" text-md text-secondary">
        Users
      </Link>
      <Link href="/products" className=" text-md text-secondary">
        Products
      </Link>
      <Link href="/admin" className=" text-md text-secondary">
        Admin
      </Link>
      <Link href="/api/auth/signin" className=" text-md text-secondary">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
