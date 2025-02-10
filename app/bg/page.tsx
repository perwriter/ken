import Image from "next/image";
import React from "react";

const Resume = () => {
  return (
    <div className="relative min-h-screen  flex items-center justify-center bg-gray-900 text-[#FFD700]">
      <Image 
        src="/bgforcv.png" 
        layout="fill" 
        objectFit="cover" 
        alt="Background for CV" 
        className="absolute top-0 left-0 w-full h-full opacity-20"
      />
      <div className="relative z-10   p-8 rounded-lg  shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4">KENNETH WEBBER</h1>
        <p className="text-center text-lg mb-6 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">813-389-9322 | KennyWebber@Outlook.com | Riverview, FL</p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Professional Summary</h2>
          <p className="mt-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">A seasoned expert in my field, I specialize in driving business excellence and delivering impactful results. Let’s connect to discuss how I can contribute to your success.</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Experience</h2>
          <div className="mt-2">
            <h3 className="text-xl font-medium drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">OpenWater – Remote</h3>
            <p className="italic  drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Various Roles (Aug 2016 – Dec 2024)</p>
            <ul className="list-disc ml-5 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              <li>Led software implementation for enterprise clients.</li>
              <li>Automated workflows, reducing processing time by 30%.</li>
              <li>Increased user adoption through training and support.</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Experience</h2>
          <div className="mt-2">
            <h3 className="text-xl font-medium drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">OpenWater – Remote</h3>
            <p className="italic  drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Various Roles (Aug 2016 – Dec 2024)</p>
            <ul className="list-disc ml-5 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              <li>Led software implementation for enterprise clients.</li>
              <li>Automated workflows, reducing processing time by 30%.</li>
              <li>Increased user adoption through training and support.</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Experience</h2>
          <div className="mt-2">
            <h3 className="text-xl font-medium drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">OpenWater – Remote</h3>
            <p className="italic  drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Various Roles (Aug 2016 – Dec 2024)</p>
            <ul className="list-disc ml-5 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
              <li>Led software implementation for enterprise clients.</li>
              <li>Automated workflows, reducing processing time by 30%.</li>
              <li>Increased user adoption through training and support.</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b pb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Education</h2>
          <p className="mt-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Associate’s Degree, Computer Science - Hillsborough Community College (2010 – 2013)</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">Skills</h2>
          <ul className="mt-2 list-disc ml-5 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            <li>Technical Support, Workflow Automation</li>
            <li>Business Strategy, SEO Optimization</li>
            <li>Client Relations, Training & Onboarding</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
