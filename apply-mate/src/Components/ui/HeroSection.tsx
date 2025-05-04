import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="bg-amber-50 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-screen-xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text + CTA */}
        <div className="flex flex-col items-start max-w-xl text-center md:text-left">
          <Image
            src="/images/logo.png"
            alt="ApplyMate Logo"
            width={150}
            height={150}
            className="mb-4"
          />

          <h1 className="text-gray-800 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Tailored Cover Letters in Seconds
          </h1>

          <h3 className="text-gray-600 text-lg sm:text-xl md:text-2xl font-medium mt-4">
            Create personalized cover letters in seconds with our AI-powered tool.
          </h3>

          <button className="mt-6 text-white bg-blue-600 hover:bg-blue-700 transition-all font-semibold py-3 px-6 rounded-lg text-lg">
            Get Started Free
          </button>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            src="/images/resume.png"
            alt="Laptop with Resume"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;