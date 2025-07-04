"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="w-full flex items-center gap-2">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/achievements">Achievements</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
