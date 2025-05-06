import React from "react";
import {
  DocumentIcon,
  LinkIcon,
  SparklesIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

let content: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}[];

content = [
  {
    title: "Paste your resume",
    desc: "Upload or paste your resume",
    icon: <DocumentIcon className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Paste the job description",
    desc: "Add the job post or LinkedIn URL",
    icon: <LinkIcon className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Click Generate",
    desc: "Let AI do the work for you",
    icon: <SparklesIcon className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Get your cover letter",
    desc: "Download or edit your letter",
    icon: <DocumentCheckIcon className="w-12 h-12 text-blue-600 mb-4" />,
  },
];

function HowItWorks() {
  return (
    <section
      id="HowItWorks"
      className="bg-gray-50
 py-16 px-4 flex flex-col items-center"
    >
      {/* Section Heading */}
      <h2 className="text-gray-800 text-4xl sm:text-5xl font-bold text-center mb-12">
        How It Works
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl">
        {content.map(
          (
            step: { title: string; desc: string; icon: React.ReactNode },
            idx
          ) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              {step.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default HowItWorks;
