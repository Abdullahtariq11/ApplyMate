import Sidebar from "@/Components/ui/Sidebar";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

/**
 * Renders the history page for displaying and managing generated cover letters.
 *
 * This page includes:
 * - A sidebar navigation component.
 * - A header section with a title and description.
 * - A search input for filtering cover letters.
 * - A table listing cover letters with details such as application name, creation date, status, and available actions (Edit, Delete, Download).
 *
 * @component
 * @returns {JSX.Element} The history page layout with sidebar, search, and cover letter table.
 */
function page() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
  {/* Sidebar */}
  <aside className="w-full md:w-auto fixed bottom-0 left-0 right-0 md:static bg-white border-t md:border-t-0 md:border-r border-gray-200 z-40">
    <Sidebar />
  </aside>

  {/* Main Content */}
  <main className="flex-1  p-4 sm:p-6 pt-16 md:pt-6 space-y-6">
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Generated Letters</h1>
      <p className="text-gray-700 text-base sm:text-lg">
        View and manage past cover letters for each application.
      </p>
    </div>

    {/* Search */}
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search for a cover letter..."
        name="search"
        id="search"
        autoComplete="off"
        spellCheck="false"
        autoCorrect="off"
        autoCapitalize="off"
        maxLength={100}
        minLength={1}
        className="w-full pl-10 pr-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-blue-500"
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>

    {/* Table */}
    <div className="w-full overflow-x-auto rounded-lg shadow border border-gray-200">
      <table className="min-w-full text-sm sm:text-base text-left text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 sm:px-6 py-3 font-bold">Application Name</th>
            <th className="px-4 sm:px-6 py-3 font-bold">Date Created</th>
            <th className="px-4 sm:px-6 py-3 font-bold">Status</th>
            <th className="px-4 sm:px-6 py-3 font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 sm:px-6 py-4">Meta Cover Letter</td>
            <td className="px-4 sm:px-6 py-4">2025-07-04</td>
            <td className="px-4 sm:px-6 py-4">
              <span className="inline-block p-1 rounded bg-green-200">Completed</span>
            </td>
            <td className="px-4 sm:px-6 py-4 flex flex-wrap gap-2">
              <button className="text-blue-600 hover:underline text-sm">Edit</button>
              <button className="text-red-600 hover:underline text-sm">Delete</button>
              <button className="hover:underline text-sm">Download</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</div>
  );
}

export default page;
