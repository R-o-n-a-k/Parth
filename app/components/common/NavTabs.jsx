"use client";

import { BriefcaseBusiness } from "lucide-react";
import { FolderOpen, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathname = usePathname();

  const navTabData = [
    { icon: <User />, path: "/about" },
    { icon: <BriefcaseBusiness />, path: "/career" },
    { icon: <FolderOpen />, path: "/projects" },
    { icon: <Mail />, path: "/contact" },
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
                  ${isActive ? "bg-grey-2 text-primary shadow-inner" : ""}
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
