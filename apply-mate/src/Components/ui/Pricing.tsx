"use client";
import React, { useState } from "react";

const pricings = [
  {
    title: "Free",
    desc: ["3 generations/day", "Basic export"],
    price: "$0",
    buttonDesc: "Get Started",
  },
  {
    title: "Pro",
    desc: ["Unlimited generations", "Save history", "PDF export"],
    price: "$5.99/month",
    buttonDesc: "Upgrade to Pro",
  },
];

function Pricing() {
  const [selected, setSelected] = useState("free");

  const handleSelect = (title: string) => {
    setSelected(title.toLowerCase());
  };

  return (
    <section
      id="pricings"
      className="bg-gray-50 flex flex-col text-center items-center py-16 px-4"
    >
      <h2 className="text-gray-800 text-4xl sm:text-5xl font-bold mb-10">
        Pricing Plans
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        {pricings.map((pricing, idx) => {
          const isSelected = selected === pricing.title.toLowerCase();
          return (
            <div
              key={idx}
              onClick={() => handleSelect(pricing.title)}
              className={`bg-white flex flex-col items-center text-center border rounded-xl p-6 transition-all duration-200 cursor-pointer shadow-md hover:shadow-xl ${
                isSelected ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {pricing.title}
              </h3>
              <ul className="text-sm text-gray-600 font-medium mb-4 space-y-1">
                {pricing.desc.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                {pricing.price}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all text-sm font-semibold">
                {pricing.buttonDesc}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Pricing;