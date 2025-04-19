"use client";

import { useProtectedRoute } from "@/lib/auth/protected-route";
import AdminNavbar from "@/components/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useProtectedRoute();

  // Don't render navbar until we know user is authenticated
  // This prevents a flash of the navbar before redirect to login
  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="min-h-screen bg-gray-50">
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <main className="py-4">{children}</main>
    </div>
  );
}