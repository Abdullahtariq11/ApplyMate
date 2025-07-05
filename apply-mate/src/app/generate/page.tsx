"use client";

import Sidebar from "@/Components/ui/Sidebar";
import { SignOutButton } from "@clerk/nextjs";
import React, { useState } from "react";

/**
 * Renders the GeneratePage component, which provides a UI for users to generate a personalized cover letter
 * by pasting their resume and a job description or job link. Handles user input, form submission, loading state,
 * error handling, and displays the generated cover letter result.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered GeneratePage component.
 *
 * @remarks
 * - Uses React hooks for state management.
 * - Sends a POST request to the API endpoint defined by `NEXT_PUBLIC_API_GENERATE_ENDPOINT` or `/api/generate`.
 * - Displays loading, error, and result states.
 * - Includes a sidebar, sign out button, and responsive layout.
 */
export default function GeneratePage() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");
    setError("");

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_GENERATE_ENDPOINT || "/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resume, jobDescription }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate.");
      }

      setResult(data.result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
  {/* Sidebar */}
  <aside className="w-full md:w-auto fixed bottom-0 left-0 right-0 md:static bg-white border-t md:border-t-0 md:border-r border-gray-200 z-40">
    <Sidebar />
  </aside>

  {/* Main Content */}
  <main className="flex-1  p-4 sm:p-6 pt-16 md:pt-6 space-y-10">
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Generate Cover Letter
        </h1>
        <SignOutButton>
          <button className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Sign Out
          </button>
        </SignOutButton>
      </div>

      <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
        Paste your resume and job description. Our AI will generate a personalized cover letter.
      </p>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-950 mb-2">Resume</label>
          <textarea
            className="w-full min-h-[180px] p-3 border text-gray-800 border-gray-300 rounded-lg shadow-sm text-sm resize-none"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your resume here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Description or Link</label>
          <textarea
            className="w-full min-h-[180px] p-3 border text-gray-800 border-gray-300 rounded-lg shadow-sm text-sm resize-none"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description or LinkedIn job URL..."
          />
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
          disabled={loading || !resume || !jobDescription}
        >
          {loading ? "Generating..." : "Generate Cover Letter"}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Result */}
      {result && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-md text-gray-800 whitespace-pre-wrap">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Generated Cover Letter:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  </main>
</div>
  );
}