import React from "react";
import {
  DocumentIcon,
  LinkIcon,
  SparklesIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

let features: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}[];

features = [
  {
    title: "AI-Powered",
    desc: "Leverage the power of AI to create personalized cover letters.",
    icon: <DocumentIcon className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Easy to Use",
    desc: "Simple and intuitive interface for a seamless experience.",
    icon: <LinkIcon className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Fast Results",
    desc: "Get your cover letter in seconds, not hours.",
    icon: <SparklesIcon className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    title: "Customizable",
    desc: "Edit and tailor your cover letter to fit your needs.",
    icon: <DocumentCheckIcon className="w-12 h-12 text-blue-600 mb-4" />,
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-white w-full flex flex-col items-center py-16 px-4"
    >
      <h2 className="text-gray-800 text-4xl sm:text-5xl font-bold text-center mb-10">
        Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-xl w-full">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 font-medium">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
