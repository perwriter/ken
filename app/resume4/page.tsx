import { Menu, Briefcase, Code, Phone } from "lucide-react";

export default function Resume4() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <a href="#" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full" />
          <span className="text-sm text-gray-600">hey@kennethwebber.com</span>
        </a>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-4xl font-bold">Hi, I'm</h1>
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src="/ken.png" alt="Kenneth Webber" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl font-bold">Kenneth Webber!</h1>
          </div>

          <div className="space-y-4">
            <p className="text-4xl font-bold text-gray-400">
              I'm a <span className="text-black">Implementation Specialist</span> at
            </p>
            <p className="text-4xl font-bold text-[#FF6B00]">OpenWater Software.</p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <div className="flex items-center gap-2 text-sm text-green-600">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              Open to work
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Book a call <Phone className="inline w-4 h-4 ml-2" />
          </button>

          <p className="mt-6 text-gray-600 max-w-md">
            Feel free to explore my portfolio and reach out—I'd love to connect!
          </p>
        </section>

        {/* Three Column Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Experience */}
          <section>
            <h2 className="text-sm font-medium mb-6">My Experience</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-px bg-gray-200 relative">
                  <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full border-2 border-black" />
                </div>
                <div>
                  <h3 className="font-medium">
                    <Briefcase className="inline w-4 h-4 mr-2" />
                    Technical Lead at OpenWater
                  </h3>
                  <p className="text-sm text-gray-600">2020 - Present</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-px bg-gray-200 relative">
                  <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full border-2 border-gray-400" />
                </div>
                <div>
                  <h3 className="font-medium">
                    <Briefcase className="inline w-4 h-4 mr-2" />
                    Implementation Specialist
                  </h3>
                  <p className="text-sm text-gray-600">2016 - 2020</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-px bg-gray-200 relative">
                  <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full border-2 border-gray-400" />
                </div>
                <div>
                  <h3 className="font-medium">
                    <Briefcase className="inline w-4 h-4 mr-2" />
                    Marketing Lead at Overacity
                  </h3>
                  <p className="text-sm text-gray-600">2016 - 2017</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Showcase */}
          <section>
            <h2 className="text-sm font-medium mb-6">My Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Technical Support", "Implementation", "Process Optimization", "Client Training"].map((skill) => (
                <div
                  key={skill}
                  className="aspect-square rounded-2xl bg-gray-100 p-4 flex items-center justify-center text-center text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Current Projects */}
          <section>
            <h2 className="text-sm font-medium mb-6">What I'm working on</h2>
            <div className="aspect-[4/3] rounded-2xl bg-gray-100 p-6">
              <div className="w-full h-full rounded-xl bg-white shadow-lg p-4">
                <h3 className="font-medium mb-2">Enterprise Implementation</h3>
                <p className="text-sm text-gray-600">Leading software implementation for Fortune 500 clients</p>
              </div>
            </div>
          </section>
        </div>

        {/* Location Section */}
        <section className="mb-20">
          <h2 className="text-sm font-medium mb-6">Where I'm based</h2>
          <div className="aspect-[2/1] rounded-2xl bg-gray-100 overflow-hidden">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-xl font-bold">TAMPA, FLORIDA</span>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section>
          <h2 className="text-sm font-medium mb-2">How I work</h2>
          <h3 className="text-2xl font-bold mb-4">01 Discovery Call</h3>
          <p className="text-gray-600 max-w-xl mb-8">
            Let's start with a discovery call to discuss your goals, needs, and expectations. This helps us align our
            vision and set the foundation for a successful implementation.
          </p>
          <div className="flex gap-4">
            {["01", "02", "03", "04", "05"].map((step) => (
              <div
                key={step}
                className={`px-4 py-2 rounded-full text-sm ${
                  step === "01" ? "bg-black text-white" : "bg-gray-100 text-gray-400"
                }`}
              >
                Step {step}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
