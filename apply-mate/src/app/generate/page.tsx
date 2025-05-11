"use client";
import Sidebar from "@/Components/ui/Sidebar";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

export default function GeneratePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white border-r border-gray-200">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Generate Cover Letter</h1>
            <SignOutButton>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Sign Out
              </button>
            </SignOutButton>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-2xl">
            Paste your resume and the job description or link. Our AI will instantly generate a personalized cover letter for you.
          </p>

          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Resume Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Resume</label>
              <textarea
                className="w-full min-h-[180px] p-3 border text-gray-700 border-gray-300 rounded-lg shadow-sm text-sm focus:outline-blue-500 resize-none"
                placeholder="Paste your resume here..."
              />
            </div>

            {/* Job Description Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Job Description or Link</label>
              <textarea
                className="w-full min-h-[180px] p-3 border text-gray-700 border-gray-300 rounded-lg shadow-sm text-sm focus:outline-blue-500 resize-none"
                placeholder="Paste the job description or LinkedIn job URL..."
              />
            </div>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
              Generate Cover Letter
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}