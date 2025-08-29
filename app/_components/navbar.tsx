"use client";

import { UserButton } from "@clerk/nextjs";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  if (pathname === "/subscription") {
    return null;
  }
  return (
    <nav className="flex items-center justify-between border-b border-solid px-6 py-4">
      <div className="flex items-center gap-6 text-lg font-medium">
        <DollarSign className="m-2 h-8 w-12 rounded bg-green-600 text-white" />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-green-700"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-green-700"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-green-700"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
