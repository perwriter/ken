import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-end gap-8 p-6 text-sm">
        <Link href="#" className="text-gray-900 hover:text-gray-600">
          resume
        </Link>
        <Link href="#" className="text-gray-500 hover:text-gray-600">
          about
        </Link>
        <Link href="#" className="text-gray-500 hover:text-gray-600">
          portfolio
        </Link>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20 max-w-6xl">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-1">Kenneth Webber</h1>
          <h2 className="text-xl mb-6">Technical Support & Implementation Specialist</h2>
          <div className="text-sm space-y-1 text-gray-600">
            <p>813-389-9322</p>
            <p>KennyWebber@Outlook.com</p>
            <p>13006 Fennway Ridge Dr. Riverview, FL, 33579</p>
          </div>
          <p className="mt-8 max-w-2xl text-gray-600">
            A seasoned expert in my field, I specialize in driving business excellence and delivering impactful results.
            With experience collaborating with some of the world's most prestigious companies, I bring a strategic and
            results-driven approach to every project. Let's connect to discuss how I can contribute to your success and
            help you achieve your goals efficiently and effectively.
          </p>
        </header>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
          {/* Left Column - Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-8">Work experience</h2>

            {/* OpenWater */}
            <div className="mb-12">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">OpenWater</h3>
                <span className="text-sm text-gray-500">Aug 2016 – Dec 2024</span>
              </div>
              <p className="text-gray-600 mb-4">
                Various Roles: Awards Consultant, Senior Consultant, Development Coordinator, Implementation Specialist
              </p>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>
                  Led the implementation and optimization of OpenWater's software solutions, ensuring seamless adoption
                  for enterprise clients, including The Smithsonian, Disney, and TED.
                </li>
                <li>
                  Provided expert consultation, workflow automation, and strategic guidance to enhance award management
                  processes, reducing processing time and manual data entry by 30%.
                </li>
                <li>
                  Spearheaded client onboarding, training, and technical support, increasing user adoption and
                  engagement through product demonstrations and tailored solutions.
                </li>
                <li>
                  Collaborated cross-functionally to improve the platform based on client feedback, driving feature
                  enhancements and system integrations.
                </li>
                <li>
                  Contributed to business growth by identifying upselling opportunities, improving customer
                  satisfaction, and helping generate a 15% increase in annual revenue.
                </li>
              </ul>
            </div>

            {/* Overacity LLC */}
            <div className="mb-12">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Overacity LLC</h3>
                <span className="text-sm text-gray-500">Sep 2016 – Sep 2017</span>
              </div>
              <p className="text-gray-600 mb-4">Head of Marketing and Business Development</p>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>
                  Developed and executed marketing campaigns to increase brand visibility and customer acquisition.
                </li>
                <li>
                  Engaged with startup founders and entrepreneurs, identifying key needs for cloud-based solutions.
                </li>
                <li>Built strategic partnerships, leading to a 40% increase in service subscriptions.</li>
              </ul>
            </div>

            {/* Joykat */}
            <div className="mb-12">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Joykat</h3>
                <span className="text-sm text-gray-500">Feb 2015 – Jun 2017</span>
              </div>
              <p className="text-gray-600 mb-4">Chief Editor</p>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>Led a team of writers and managed content production across 200+ digital platforms.</li>
                <li>Authored high-traffic articles with over 1,000,000+ views, increasing site engagement.</li>
                <li>Designed editorial strategies that improved ad revenue and audience retention.</li>
                <li>
                  Collaborated with marketing to create PPC and social media campaigns that boosted traffic by 35%.
                </li>
              </ul>
            </div>

            {/* Kone Marketing */}
            <div className="mb-12">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Kone Marketing</h3>
                <span className="text-sm text-gray-500">Nov 2014 – Aug 2015</span>
              </div>
              <p className="text-gray-600 mb-4">Head of Content Management</p>
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>Managed site content strategy and customer engagement initiatives, improving client retention.</li>
                <li>Created SEO-driven content that increased organic traffic by 50%.</li>
                <li>
                  Oversaw content marketing efforts that expanded client portfolios and strengthened brand credibility.
                </li>
              </ul>
            </div>
          </section>

          {/* Right Column - Education & Skills */}
          <div className="space-y-12">
            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Education</h2>

              <div className="mb-6">
                <h3 className="font-semibold">Associate's Degree, Computer Science</h3>
                <p className="text-gray-600">Hillsborough Community College</p>
                <p className="text-sm text-gray-500">2010 – 2013</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold">High School Diploma</h3>
                <p className="text-gray-600">Lennard High School</p>
                <p className="text-sm text-gray-500">2006 – 2009</p>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Certifications</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">SEO & Digital Marketing</h3>
                  <p className="text-gray-600">Semrush</p>
                  <p className="text-sm text-gray-500">Expires Jan 2026</p>
                </div>

                <div>
                  <h3 className="font-semibold">Foundations of Raising Capital</h3>
                  <p className="text-gray-600">LinkedIn</p>
                  <p className="text-sm text-gray-500">Oct 2024</p>
                </div>

                <div>
                  <h3 className="font-semibold">OpenWater Certifications</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Admin Training (Jan 2023)</li>
                    <li>Essentials (Jan 2023)</li>
                    <li>Software Certification (Aug 2018)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Technical Support",
                  "Software Support",
                  "Ticketing Systems",
                  "Issue Resolution",
                  "System Integrations",
                  "Development Coordination",
                  "Workflow Automation",
                  "Process Optimization",
                ].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

