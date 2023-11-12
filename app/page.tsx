import Image from "next/image";
import Link from "next/link";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="text-secondary-content">
      <h1 className=" text-sky-500 text-5xl">Welcome</h1>
      <ul className=" flex gap-5"></ul>
    </main>
  );
}
