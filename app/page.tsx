import Image from "next/image";
import Link from "next/link";
import Products from "./components/Products";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="text-secondary-content">
      <h1 className=" text-sky-700 text-3xl">
        Welcome{" "}
        {session && (
          <span className=" text-primary-content text-3xl">
            {session.user?.name}
          </span>
        )}
      </h1>
      <ul className=" flex gap-5"></ul>
    </main>
  );
}
