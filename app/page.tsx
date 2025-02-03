import Image from "next/image";
import Resume from "./resume1/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <nav className="bg-white p-6 rounded-lg shadow-lg space-x-6">
        <Link href="/resume1" className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
          Resume1
        </Link>
        <Link href="/resume1b" className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
          Resume1b
        </Link>
        <Link href="/resume2" className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">
          Resume2
        </Link>
      </nav>
    </div>
  );
}
