"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUsers = () => {
  const router = useRouter();
  return (
    <div>
      <h1>New Users</h1>
      <button
        className=" btn-primary btn"
        onClick={() => {
          router.push("/users");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default NewUsers;
