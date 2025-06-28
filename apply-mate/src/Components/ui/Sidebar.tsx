"use client";
import {
  FolderIcon,
  PencilIcon,
  HomeIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Sidebar component that provides navigation links for the application.
 *
 * Features:
 * - Responsive sidebar with toggle functionality (collapsed and expanded states).
 * - Displays navigation items with icons and highlights the active route.
 * - Optionally displays a logo when expanded (currently commented out).
 *
 * @component
 * @returns {JSX.Element} The rendered Sidebar component.
 *
 * @example
 * ```tsx
 * <Sidebar />
 * ```
 */
function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  ///
  /// Navigation Items
  ///
  const navItems = [
    {
      href: "/dashboard",
      icon: <HomeIcon className="w-5 h-5" />,
      text: "Dashboard",
    },
    {
      href: "/generate",
      icon: <PencilIcon className="w-5 h-5" />,
      text: "Generate",
    },
    {
      href: "/history",
      icon: <FolderIcon className="w-5 h-5" />,
      text: "History",
    },
  ];

  return (
    <div className="White border-r border-amber-200 w-auto h-full px-4 py-6 shadow-sm">
      {/* Toggle Button */}
      <button>
        <Bars3Icon
          className="w-6 h-6 text-gray-500 cursor-pointer mb-10 hover:text-gray-900 transition-all"
          onClick={toggleSidebar}
        />
      </button>

      {!isOpen && (
        <div className="flex items-center justify-center ">
          <ul className="flex flex-col gap-8">
            {navItems.map(({ href, icon, text }) => (
              <li key={href}>
                <Link href={href} className={`flex items-center transition-all ${pathname===href?
                  "bg-black text-white":
                  "text-gray-700 hover:bg-black hover:text-white"
                }`}>
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOpen && (
        <>
          {/*Logo */}
         {/*<div className="flex flex-col items-center mb-8">
            <Image
              src="/images/logo.png"
              alt="ApplyMate Logo"
              width={100}
              height={100}
            />
          </div>
      */}

          <ul className="flex flex-col gap-3">
            {navItems.map(({ href, icon, text }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    pathname === href
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-black hover:text-white"
                  }`}
                >
                  {icon}
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Sidebar;
