import Image from "next/image";
import Link from "next/link";
import Products from "./components/Products";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import banner from "@/public/sierra-nevada-mountains-macos-high-sierra-mountain-range-5120x2880-8674.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <Image
        src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fill
        alt="image"
        className="object-cover"
        quality={100}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
    </main>
  );
}
