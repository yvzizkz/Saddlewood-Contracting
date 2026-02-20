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
    } else if (!loading && user && pathname === '/admin/login') {
      // Redirect to dashboard if already authenticated and on login page
      router.push('/admin');
    }
  }, [user, loading, router, pathname]);
  
  // Immediately return null to prevent any rendering until authentication is complete
  if (loading) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }
  
  // If not on login page and not authenticated, prevent rendering anything
  if (!user && pathname !== '/admin/login') {
    return null;
  }

  // We've already handled loading state and authentication above
  // The code below only executes if authentication is confirmed

  // Show only content (no navbar) for login page
  if (pathname === '/admin/login') {
    return (
      <div className="min-h-screen bg-obsidian">
        <main>{children}</main>
      </div>
    );
  }

  // For authenticated pages, show navbar and content
  return (
    <div className="min-h-screen bg-obsidian">
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