"use client";
import { FolderIcon, PencilIcon, HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: <HomeIcon className="w-5 h-5" />, text: "Dashboard" },
    { href: "/generate", icon: <PencilIcon className="w-5 h-5" />, text: "Generate" },
    { href: "/history", icon: <FolderIcon className="w-5 h-5" />, text: "History" },
  ];

  return (
    <div className="bg-amber-50 border-r border-amber-200 h-full w-full px-4 py-6 shadow-sm">
      <div className="flex flex-col items-center mb-8">
        <Image src="/images/logo.png" alt="ApplyMate Logo" width={100} height={100} />
      </div>
      <ul className="flex flex-col gap-3">
        {navItems.map(({ href, icon, text }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === href
                  ? "bg-amber-900 text-white"
                  : "text-gray-700 hover:bg-amber-900 hover:text-white"
              }`}
            >
              {icon}
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;