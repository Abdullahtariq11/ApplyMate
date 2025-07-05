import Sidebar from "@/Components/ui/Sidebar";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

/**
 * Renders the main dashboard page for the application.
 *
 * The dashboard includes:
 * - A sidebar for navigation.
 * - A header with the page title and a sign-out button.
 * - A welcome message for the user.
 * - A call-to-action button to create a new application.
 * - A table displaying a list of applications with their status and creation date.
 * - A footer button to view all applications.
 *
 * @returns The dashboard page layout as a React functional component.
 */
export default function DashboardPage() {
  return (
   <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
  {/* Sidebar */}
  <aside className="w-full md:w-auto bg-white border-t md:border-t-0 md:border-r border-gray-200 fixed bottom-0 left-0 right-0 md:static z-40">
    <Sidebar />
  </aside>

  {/* Main Content */}
  <main className="flex-1 px-4 sm:px-6 py-6 space-y-8 pt-16 md:pt-6">
    {/* Header */}
    <div className="flex justify-between items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard</h1>
      <SignOutButton>
        <button className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign Out
        </button>
      </SignOutButton>
    </div>

    {/* Welcome message */}
    <p className="text-gray-600 text-base sm:text-lg">
      Welcome to your dashboard! Here you can manage your account and track applications.
    </p>

    {/* CTA */}
    <div>
      <button className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
        + New Application
      </button>
    </div>

    {/* Applications Table */}
    <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
      <table className="min-w-full text-sm sm:text-base text-left text-gray-700">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 sm:px-6 py-3 font-bold">Application Name</th>
            <th className="px-4 sm:px-6 py-3 font-bold">Status</th>
            <th className="px-4 sm:px-6 py-3 font-bold">Date Created</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 sm:px-6 py-4">Application 1</td>
            <td className="px-4 sm:px-6 py-4">In Progress</td>
            <td className="px-4 sm:px-6 py-4">2023-10-01</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 sm:px-6 py-4">Application 2</td>
            <td className="px-4 sm:px-6 py-4">Completed</td>
            <td className="px-4 sm:px-6 py-4">2023-09-15</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="border-t">
            <td className="px-4 sm:px-6 py-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View All Applications
              </button>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </main>
</div>
  );
}
