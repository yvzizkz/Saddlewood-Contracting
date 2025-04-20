"use client";

import AdminNavbar from "@/components/AdminNavbar";
import { AdminAuthProvider, useAdminAuth } from "@/lib/auth/admin-auth-context";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

function AdminLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();
  
  // Check if user is authenticated and redirect if needed
  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      // Redirect to login if not authenticated and not already on login page
      router.push('/admin/login');
    }
  }, [user, loading, router, pathname]);

  // Don't render navbar until we know user is authenticated
  // This prevents a flash of the navbar before redirect to login
  if (loading || (!user && pathname !== '/admin/login')) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main>{children}</main>
      </div>
    );
  }

  // Show only content (no navbar) for login page
  if (pathname === '/admin/login') {
    return (
      <div className="min-h-screen bg-gray-50">
        <main>{children}</main>
      </div>
    );
  }

  // For authenticated pages, show navbar and content
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <main className="py-4">{children}</main>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminAuthProvider>
  );
}