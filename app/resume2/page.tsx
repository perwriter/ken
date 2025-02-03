export default function Resume2() {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-purple-900 via-indigo-900 to-[#97D700] text-white">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="relative mb-12">
            <div className="flex justify-between items-start">
              <div>
                <div className="inline-block px-4 py-1 rounded-full border border-white/20 mb-4">
                  Technical Support Specialist
                </div>
                <h1>
                  <div className="text-6xl font-bold bg-gradient-to-r from-white to-[#97D700] bg-clip-text text-transparent">
                    Kenneth
                  </div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#97D700] to-white bg-clip-text text-transparent mt-1">
                    Webber
                  </div>
                </h1>
                <p className="mt-4 max-w-md text-gray-300">
                  A seasoned expert specializing in driving business excellence and delivering impactful results with
                  world's most prestigious companies.
                </p>
              </div>
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl overflow-hidden">
                  <img src="/ken.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4">
                  <svg className="w-8 h-8 text-[#97D700]" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 0L15.708 8.292L24 12L15.708 15.708L12 24L8.292 15.708L0 12L8.292 8.292L12 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
  
          {/* Main Content Grid */}
          <div className="grid grid-cols-[1.5fr,1fr] gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Work Experience */}
              <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  Work Experience
                  <svg className="w-4 h-4 text-[#97D700]" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 0L15.708 8.292L24 12L15.708 15.708L12 24L8.292 15.708L0 12L8.292 8.292L12 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#97D700] flex items-center justify-center shrink-0">01</div>
                    <div>
                      <h3 className="font-bold">OpenWater</h3>
                      <p className="text-sm text-gray-300">Aug 2016 – Dec 2024</p>
                      <p className="mt-2 text-sm text-gray-300">
                        Led implementation of software solutions for enterprise clients including The Smithsonian, Disney,
                        and TED. Reduced processing time by 30% through expert consultation and workflow automation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#97D700] flex items-center justify-center shrink-0">02</div>
                    <div>
                      <h3 className="font-bold">Overacity LLC</h3>
                      <p className="text-sm text-gray-300">Sep 2016 – Sep 2017</p>
                      <p className="mt-2 text-sm text-gray-300">
                        Head of Marketing and Business Development. Built strategic partnerships leading to 40% increase
                        in service subscriptions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  Education
                  <svg className="w-4 h-4 text-[#97D700]" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 0L15.708 8.292L24 12L15.708 15.708L12 24L8.292 15.708L0 12L8.292 8.292L12 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <p className="text-sm text-gray-300">2010 - 2013</p>
                    <h3 className="font-bold">Associate's Degree</h3>
                    <p className="text-sm text-gray-300">Hillsborough Community College</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <p className="text-sm text-gray-300">2006 - 2009</p>
                    <h3 className="font-bold">High School Diploma</h3>
                    <p className="text-sm text-gray-300">Lennard High School</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="text-right">
                <p className="text-gray-300">KennyWebber@Outlook.com</p>
                <p className="text-gray-300">813-389-9322</p>
                <p className="text-gray-300">www.example.com</p>
              </div>
  
              {/* Skills */}
              <div>
                <h2 className="text-2xl font-bold mb-6">My Skills</h2>
                <div className="space-y-3">
                  <div className="bg-white/20 text-white px-4 py-2 rounded-full">Technical Support</div>
                  <div className="bg-white/10 text-white px-4 py-2 rounded-full">Software Implementation</div>
                  <div className="bg-[#97D700] text-black px-4 py-2 rounded-full">Process Optimization</div>
                  <div className="bg-white/20 text-white px-4 py-2 rounded-full">Workflow Automation</div>
                </div>
              </div>
  
              {/* Languages */}
              <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6">Languages</h2>
                <div className="space-y-2">
                  <p className="text-gray-300">English - Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  