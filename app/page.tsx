import Image from "next/image";
import Link from "next/link";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="text-secondary-content">
      <h1>Hello World</h1>
      <ul className=" flex gap-5">
        <Link href="/users">Users</Link>
        <Link href="/users/new-users">new users</Link>
      </ul>
      <Products />
    </main>
  );
}
