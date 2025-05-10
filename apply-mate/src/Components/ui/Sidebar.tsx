import { FolderIcon, PencilIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <div className="bg-amber-50 border h-screen border-amber-950 flex flex-col gap-1">
      <ul className="flex flex-col items-center justify-center">
        <li className="flex flex-col items-center justify-center ">
          <Image
            src="/images/logo.png"
            alt="ApplyMate Logo"
            width={150}
            height={150}
          />
        </li>
        <li className="hover:cursor-pointer flex gap-1 flex-row hover:bg-amber-950 hover:text-white transition-all text-gray-700 text-2xl px-1 font-medium  py-2  rounded-lg">
          <HomeIcon className="w-6 h-7 " />
          <a href="/features">Dashboard</a>
        </li>
        <li className="hover:cursor-pointer flex gap-1 flex-row hover:bg-amber-950 hover:text-white transition-all text-gray-700 font-medium px-1 text-2xl py-2  rounded-lg">
          <PencilIcon className="w-6 h-7" />
          <a href="/generate">Generate</a>
        </li>
        <li className="hover:cursor-pointer flex gap-1 flex-row hover:bg-amber-950 hover:text-white transition-all text-gray-700 font-medium px-1 text-2xl py-2 rounded-lg">
        <FolderIcon className="w-6 h-7 " />
          <a href="/history">History</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
