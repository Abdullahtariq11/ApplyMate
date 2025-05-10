import Sidebar from "@/Components/ui/Sidebar";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="bg-white flex flex-row">
      <div className="flex flex-col h-screen w-1/6">
        <Sidebar />
      </div>
      <div className="flex h-screen flex-col m-2 w-3/4">
        <div className="flex flex-col items-end ">
          {
            <SignOutButton>
              <button className="hover:cursor-pointer w-50 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium text-base">
                Sign Out
              </button>
            </SignOutButton>
          }
        </div>

        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
          <p className="text-gray-600 text-lg mb-8">
            Welcome to your dashboard! Here you can manage your account and
            settings.
          </p>
          <button className="bg-blue-600 text-white py-3 w-100 rounded-lg hover:bg-blue-700 transition-all font-medium text-base">
            New Application
          </button>
        </div>

        <table className="min-w-full m-2 bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 px-4 py-2 text-left font-bold text-gray-800">
                Application Name
              </th>
              <th className="border-b-2 border-gray-200 px-4 py-2 text-left font-bold text-gray-800">
                Status
              </th>
              <th className="border-b-2 border-gray-200 px-4 py-2 text-left font-bold text-gray-800">
                Date Created
              </th>
              </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr >
              <td className="border-b border-gray-200 px-4 py-2">
                Application 1
              </td>
              <td className="border-b border-gray-200 px-4 py-2">In Progress</td>
              <td className="border-b border-gray-200 px-4 py-2">
                2023-10-01
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-600 px-4 py-2">
                Application 2
              </td>
              <td className="border-b border-gray-200 px-4 py-2">Completed</td>
              <td className="border-b border-gray-200 px-4 py-2">
                2023-09-15
              </td>
            </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all font-medium text-base">
                    View All Applications
                  </button>
                </td>
                <td className="border-b border-gray-200 px-4 py-2"></td>
                <td className="border-b border-gray-200 px-4 py-2"></td>
              </tr>
            </tfoot>
          </table>


      </div>
    </div>
  );
}

export default page;
