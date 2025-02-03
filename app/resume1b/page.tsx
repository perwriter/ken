import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-end gap-8 p-8 text-sm font-medium">
        {/* <Link href="#" className="text-white hover:text-gray-400 transition-colors">
          resume
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          about
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          portfolio
        </Link> */}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-8 pb-20 max-w-6xl">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-16">
          {/* Left Column */}
          <div>
            {/* Header Section */}
            <header className="mb-16">
              <div className="flex items-start gap-4 mb-8">
                <h1 className="text-[2.5rem] leading-tight font-medium">
                  Kenneth Webber,
                  <br />
                  Senior Consultant
                </h1>
              </div>

              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400">Available</span>
              </div>

              <p className="text-gray-400 max-w-2xl">
                A seasoned expert in my field, I specialize in driving business excellence and delivering impactful
                results. With experience collaborating with some of the world's most prestigious companies, I bring a
                strategic and results-driven approach to every project.
              </p>
            </header>

            {/* Work Experience */}
            <section>
              <h2 className="text-xl font-medium mb-8">Work experience</h2>

              {/* OpenWater */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium">OW</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">OpenWater</h3>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Aug 2016 – Dec 2024</p>
                    <p className="text-gray-400 mb-4">
                      Various Roles: Awards Consultant, Senior Consultant, Development Coordinator, Implementation
                      Specialist
                    </p>
                    <ul className="list-disc pl-4 space-y-2 text-gray-400 text-sm">
                      <li>
                        Led the implementation and optimization of OpenWater's software solutions for enterprise
                        clients.
                      </li>
                      <li>Provided expert consultation, reducing processing time by 30%.</li>
                      <li>Spearheaded client onboarding and technical support.</li>
                      <li>Collaborated on platform improvements and system integrations.</li>
                      <li>Helped generate 15% increase in annual revenue.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Other roles following same pattern */}
              <div className="mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium">OC</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">Overacity LLC</h3>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Sep 2016 – Sep 2017</p>
                    <p className="text-gray-400 mb-4">Head of Marketing and Business Development</p>
                    <ul className="list-disc pl-4 space-y-2 text-gray-400 text-sm">
                      <li>Developed marketing campaigns for brand visibility.</li>
                      <li>Engaged with startup founders and entrepreneurs.</li>
                      <li>Built partnerships leading to 40% subscription increase.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Contact Info */}
            <div className="mb-12 text-sm">
              <p className="mb-2">813-389-9322</p>
              <p className="mb-2">KennyWebber@Outlook.com</p>
              <p className="mb-4">Riverview, FL</p>
              <div className="flex gap-3">
                <Link href="https://www.linkedin.com/in/therealkennethwebber/" className="flex gap-2 justify-center items-center text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 text-blue-500 h-5" /> LinkedIn
                </Link>
              </div>
            </div>

            {/* Education */}
            <section className="mb-12">
              <h2 className="text-xl font-medium mb-8">Education</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-400 rotate-45"></div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Computer Science</h3>
                    <p className="text-sm text-gray-400">Hillsborough Community College</p>
                    <p className="text-sm text-gray-500">2010 – 2013</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">High School Diploma</h3>
                    <p className="text-sm text-gray-400">Lennard High School</p>
                    <p className="text-sm text-gray-500">2006 – 2009</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-medium mb-8">Skills</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-4">Technical</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Technical Support", "Software Support", "Ticketing Systems", "System Integrations"].map(
                      (skill) => (
                        <span key={skill} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-4">Process</h3>
                  <div className="flex flex-wrap gap-2">
                    {[ 
                      "Development Coordination", 
                      "Workflow Automation", 
                      "Process Optimization", 
                      "Issue Resolution",
                    ].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
