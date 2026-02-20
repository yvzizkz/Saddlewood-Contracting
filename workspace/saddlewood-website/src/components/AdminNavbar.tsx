"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAdminAuth } from "@/lib/auth/admin-auth-context";

export default function AdminNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout, user } = useAdminAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      router.push('/admin/login');
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-surface shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/admin" className="text-xl font-bold text-text-primary">
                Saddlewood Admin
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/admin"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/admin")
                    ? "border-gold text-text-primary"
                    : "border-transparent text-silver-dark hover:border-border-default hover:text-text-secondary"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/admin/leads"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/admin/leads")
                    ? "border-gold text-text-primary"
                    : "border-transparent text-silver-dark hover:border-border-default hover:text-text-secondary"
                }`}
              >
                Leads
              </Link>
              <Link
                href="/admin/users"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/admin/users")
                    ? "border-gold text-text-primary"
                    : "border-transparent text-silver-dark hover:border-border-default hover:text-text-secondary"
                }`}
              >
                Users
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-silver-dark hover:border-border-default hover:text-text-secondary"
              >
                View Website
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-text-inverse bg-gold hover:bg-gold-dark focus:outline-none transition-colors disabled:bg-surface-raised"
            >
              {isLoggingOut ? "Logging out..." : "Sign out"}
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-gold hover:bg-surface-light focus:outline-none"
            >
              {isLoggingOut ? "..." : "Sign out"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/admin"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/admin")
                ? "border-gold text-gold bg-surface-light"
                : "border-transparent text-text-secondary hover:bg-surface-light hover:border-border-default hover:text-text-primary"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/leads"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/admin/leads")
                ? "border-gold text-gold bg-surface-light"
                : "border-transparent text-text-secondary hover:bg-surface-light hover:border-border-default hover:text-text-primary"
            }`}
          >
            Leads
          </Link>
          <Link
            href="/admin/users"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive("/admin/users")
                ? "border-gold text-gold bg-surface-light"
                : "border-transparent text-text-secondary hover:bg-surface-light hover:border-border-default hover:text-text-primary"
            }`}
          >
            Users
          </Link>
          <Link
            href="/"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-text-secondary hover:bg-surface-light hover:border-border-default hover:text-text-primary"
          >
            View Website
          </Link>
        </div>
      </div>
    </nav>
  );
}
