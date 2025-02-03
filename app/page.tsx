import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {["Resume 1", "Resume 1b", "Resume 2", "Resume 2b", "Resume 3", "Resume 3b", "Resume 4", "Resume 4b"].map((resume, index) => (
          <div key={index} className="bg-white  rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <Link
              href={`/${resume.toLowerCase().replace(" ", "")}`}
              className="block text-center text-lg font-semibold text-gray-700 hover:text-white hover:bg-gray-500 px-3 py-3 rounded-lg transition duration-300"
            >
              {resume}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
