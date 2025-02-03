import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Resumes</Link>
        </div>
        <div className="space-x-6">
          {["Resume 1", "Resume 1b", "Resume 2", "Resume 2b", "Resume 3", "Resume 3b", "Resume 4", "Resume 4b"].map((resume, index) => (
            <Link key={index} href={`/${resume.toLowerCase().replace(" ", "")}`} className="text-white hover:text-gray-400 transition duration-300">
               {resume}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
