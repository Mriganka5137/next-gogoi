import React from "react";
interface Props {
  params: { id: number };
}

const UserDetails = ({ params: { id } }: Props) => {
  return (
    <div className=" text-secondary-content">
      <h1>UserDetails : {id}</h1>
    </div>
  );
};

export default UserDetails;
