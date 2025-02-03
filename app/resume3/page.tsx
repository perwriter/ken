export default function Resume() {
    return (
      <div className="min-h-screen bg-[#F5F2EA] p-8 font-serif">
        <div className="max-w-3xl mx-auto bg-[#F5F2EA] p-8 border border-gray-800">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-12">Technical Support Specialist</p>
            
            <h1 className="text-4xl mb-6">
              HELLO, I'M
              <br />
              KENNETH WEBBER
            </h1>
  
            {/* Profile Image */}
            <div className="relative inline-block">
              <div className="w-64 h-64 rounded-full overflow-hidden 800 mx-auto">
                <img 
                  src="/ken.png"
                  alt="Kenneth Webber"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Stars */}
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl">✻</span>
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-2xl">✻</span>
            </div>
  
            <h2 className="text-2xl mt-6 mb-4">
              PASSIONATE
              <br />
               <span className="italic lowercase"> IMPLEMENTATION specialist</span>
            </h2>
            
            <p className="max-w-xl mx-auto text-sm leading-relaxed">
              A seasoned expert in driving business excellence and delivering impactful results. 
              With experience collaborating with some of the world's most prestigious companies, 
              I bring a strategic and results-driven approach to every project.
            </p>
          </div>
  
          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
            {/* Left Column */}
            <div className="space-y-8">
              <section>
                <h3 className="text-lg uppercase mb-4">Skills</h3>
                <ul className="text-sm space-y-2">
                  <li>Technical Support</li>
                  <li>Software Implementation</li>
                  <li>Process Optimization</li>
                  <li>Workflow Automation</li>
                  <li>System Integration</li>
                  <li>Client Training</li>
                </ul>
              </section>
  
              <section>
                <h3 className="text-lg uppercase mb-4">Education</h3>
                <div className="text-sm space-y-4">
                  <div>
                    <p className="font-medium">Associate's Degree in Computer Science</p>
                    <p>Hillsborough Community College</p>
                    <p className="text-gray-600">2010-2013</p>
                  </div>
                  <div>
                    <p className="font-medium">High School Diploma</p>
                    <p>Lennard High School</p>
                    <p className="text-gray-600">2006-2009</p>
                  </div>
                </div>
              </section>
  
              <section>
                <h3 className="text-lg uppercase mb-4">Certifications</h3>
                <ul className="text-sm space-y-2">
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
                <h3 className="text-lg uppercase mb-4">Work Experience</h3>
                <div className="text-sm space-y-6">
                  <div>
                    <p className="font-medium">OpenWater</p>
                    <p className="text-gray-600">2016-2024</p>
                    <p className="italic mb-2">Awards Consultant, Senior Consultant, Development Coordinator</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Led implementation for enterprise clients including The Smithsonian, Disney, and TED</li>
                      <li>Reduced processing time by 30% through expert consultation</li>
                      <li>Spearheaded client onboarding and technical support</li>
                    </ul>
                  </div>
  
                  <div>
                    <p className="font-medium">Overacity LLC</p>
                    <p className="text-gray-600">2016-2017</p>
                    <p className="italic mb-2">Head of Marketing and Business Development</p>
                    <ul className="list-disc pl-4 space-y-1">
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
          <div className="grid grid-cols-3 gap-4 text-center mt-12 pt-8 border-t border-gray-800">
            <div>
              <p className="text-sm uppercase mb-1">Phone</p>
              <p className="text-sm">813-389-9322</p>
            </div>
            <div>
              <p className="text-sm uppercase mb-1">Email</p>
              <p className="text-sm">KennyWebber@Outlook.com</p>
            </div>
            <div>
              <p className="text-sm uppercase mb-1">Location</p>
              <p className="text-sm">Riverview, FL</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  