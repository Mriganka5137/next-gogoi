import React from "react";
interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className=" flex ">
      <aside className="bg-base-200 w-1/3 p-5 h-screen">Sidebar</aside>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AdminLayout;
