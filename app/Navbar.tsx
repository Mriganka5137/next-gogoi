import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between gap-10">
      <Link href="/" className=" text-xl text-secondary">
        Home
      </Link>
      <Link href="/users" className=" text-xl text-secondary">
        Users
      </Link>
      <Link href="/products" className=" text-xl text-secondary">
        Products
      </Link>
      <Link href="/admin" className=" text-xl text-secondary">
        Admin
      </Link>
      <Link href="/api/auth/signin" className=" text-xl text-secondary">
        Login
      </Link>
    </div>
  );
};

export default Navbar;
