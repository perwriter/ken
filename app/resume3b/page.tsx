export default function Resume() {
  return (
    <div className="min-h-screen bg-[#121212] p-8 font-serif">
      <div className="max-w-5xl mx-auto bg-[#000000] p-8 ">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase mb-6 text-gray-400">IMPLEMENTATION specialist</p>

          <h1 className="text-4xl mb-6 text-white">
            HELLO, I'M
            <br />
            KENNETH WEBBER
          </h1>

          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-64 h-64 rounded-full overflow-hidden mx-auto">
              <img 
                src="/ken.png"
                alt="Kenneth Webber"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Stars */}
            <span className="absolute -left-24 top-1/3 -translate-y-1/2 text-8xl text-yellow-500">✻</span>
            <span className="absolute -right-20 top-2/3 -translate-y-1/2 text-8xl text-yellow-500">✻</span>
          </div>

          <h2 className="text-2xl mt-6 mb-4 text-gray-300">
            PASSIONATE
            <br />
            <span className="italic lowercase text-yellow-500">IMPLEMENTATION specialist</span>
          </h2>

          <p className="max-w-xl mx-auto text-sm leading-relaxed text-gray-400">
            A seasoned expert in driving business excellence and delivering impactful results. 
            With experience collaborating with some of the world's most prestigious companies, 
            I bring a strategic and results-driven approach to every project.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8 border-t border-gray-700 pt-8">
          {/* Left Column */}
          <div className="space-y-8">
            <section>
              <h3 className="text-lg uppercase mb-4 text-yellow-500">Skills</h3>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>Technical Support</li>
                <li>Software Implementation</li>
                <li>Process Optimization</li>
                <li>Workflow Automation</li>
                <li>System Integration</li>
                <li>Client Training</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg uppercase mb-4 text-yellow-500">Education</h3>
              <div className="text-sm space-y-4 text-gray-400">
                <div>
                  <p className="font-medium text-white">Associate's Degree in Computer Science</p>
                  <p>Hillsborough Community College</p>
                  <p className="text-gray-500">2010-2013</p>
                </div>
                <div>
                  <p className="font-medium text-white">High School Diploma</p>
                  <p>Lennard High School</p>
                  <p className="text-gray-500">2006-2009</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg uppercase mb-4 text-yellow-500">Certifications</h3>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>OpenWater Admin Training</li>
                <li>OpenWater Software Certification</li>
                <li>SEO & Digital Marketing</li>
                <li>Business & Finance</li>
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div>
            <section>
              <h3 className="text-lg uppercase mb-4 text-yellow-500">Work Experience</h3>
              <div className="text-sm space-y-6 text-gray-400">
                <div>
                  <p className="font-medium text-white">OpenWater</p>
                  <p className="text-gray-500">2016-2024</p>
                  <p className="italic mb-2 text-gray-300">Awards Consultant, Senior Consultant, Development Coordinator</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-300">
                    <li>Led implementation for enterprise clients including The Smithsonian, Disney, and TED</li>
                    <li>Reduced processing time by 30% through expert consultation</li>
                    <li>Spearheaded client onboarding and technical support</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-white">Overacity LLC</p>
                  <p className="text-gray-500">2016-2017</p>
                  <p className="italic mb-2 text-gray-300">Head of Marketing and Business Development</p>
                  <ul className="list-disc pl-4 space-y-1 text-gray-300">
                    <li>Built strategic partnerships</li>
                    <li>Increased service subscriptions by 40%</li>
                    <li>Led marketing campaign development</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-3 gap-4 text-center mt-12 pt-8 border-t border-gray-700">
          <div>
            <p className="text-sm uppercase mb-1 text-gray-400">Phone</p>
            <p className="text-sm text-white">813-389-9322</p>
          </div>
          <div>
            <p className="text-sm uppercase mb-1 text-gray-400">Email</p>
            <p className="text-sm text-white">KennyWebber@Outlook.com</p>
          </div>
          <div>
            <p className="text-sm uppercase mb-1 text-gray-400">Location</p>
            <p className="text-sm text-white">Riverview, FL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
