"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
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
      {status === "loading" && (
        <span className="loading loading-dots loading-xs"></span>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className=" text-md text-secondary">
          Login
        </Link>
      )}
      {status === "authenticated" && (
        <Link href="" className=" text-md text-secondary">
          {session.user!.name}
        </Link>
      )}
    </div>
  );
};

export default Navbar;
