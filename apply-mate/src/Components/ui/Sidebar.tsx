"use client";
import {
  FolderIcon,
  PencilIcon,
  HomeIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
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
    <div
      className={`
    fixed z-50
    bottom-0 left-0 right-0
    md:static
    flex flex-row md:flex-col
    bg-white
    border-t md:border-t-0 md:border-r border-amber-200
    shadow-sm
    w-full md:${isOpen ? "w-64" : "w-16"}
    h-auto md:h-full
    transition-all duration-300
  `}
    >
      {/* Toggle button - visible only on md+ */}
      <div className="hidden md:flex justify-end p-2">
        <Bars3Icon
          className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-900 transition-all"
          onClick={toggleSidebar}
        />
      </div>

      <ul className="flex flex-row md:flex-col w-full justify-around md:justify-start md:mt-6 gap-1 md:gap-3">
        {navItems.map(({ href, icon, text }) => (
          <li key={href}>
            <Link
              href={href}
              className={`
            flex flex-col md:flex-row items-center md:items-start
            gap-0.5 md:gap-3
            px-3 py-2
            rounded-lg text-xs md:text-sm font-medium
            transition-all
            ${
              pathname === href
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-black hover:text-white"
            }
          `}
            >
              {icon}
              <span className={`${isOpen ? "inline" : "hidden"}`}>
                {text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
