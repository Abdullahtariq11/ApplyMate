import Sidebar from "@/Components/ui/Sidebar";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-auto bg-white border-r border-gray-200">
        <Sidebar />
      </aside>

      <main className="flex min-h-screen flex-col p-2 m-5">
        <div className="flex flex-col justify-center items-center p-2 m-2">
          <h1 className="text-black text-5xl ">Your Generated Letters</h1>
          <p className="text-gray-700">
            View and manage past cover letter for each application
          </p>
        </div>

        <div className="relative w-full max-w-md p-2 m-5">
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
            className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-blue-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </main>
    </div>
  );
}

export default page;
