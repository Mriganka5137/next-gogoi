import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: { id: number };
}

const UserDetails = ({ params: { id } }: Props) => {
  if (id > 10) return notFound();
  return (
    <div className=" text-secondary-content">
      <h1>UserDetails : {id}</h1>
    </div>
  );
};

export default UserDetails;
