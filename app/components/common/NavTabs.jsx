"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaFolderOpen, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

export default function NavTabs() {
  const pathname = usePathname();

  const navTabData = [
    { icon: <FaUser />, path: "/about" },
    { icon: <FaBriefcase />, path: "/career" },
    { icon: <FaFolderOpen />, path: "/projects" },
    { icon: <PiCertificateFill />, path: "/achievements" },
    { icon: <FaEnvelope />, path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 transition-all duration-100 ease-in-out">
      <ul className="w-full flex items-center justify-around text-xl md:text-2xl bg-grey-1 text-grey-3">
        {navTabData.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <li key={index} className="w-full flex justify-center">
              <Link
                href={item.path}
                className={`w-full flex justify-center items-center px-2 py-4 hover:bg-grey-2 hover:shadow-inner
                  ${isActive ? "bg-grey-2 text-accent shadow-inner" : ""}
                `}
              >
                {item.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
