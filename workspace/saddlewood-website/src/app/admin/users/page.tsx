"use client";

import { useEffect, useState } from "react";
import { useProtectedRoute } from "@/lib/auth/protected-route";
import AdminUserForm from "@/components/AdminUserForm";

// User type definition
type User = {
  id: number;
  username: string;
  name: string | null;
  createdAt: string;
};

export default function AdminUsersPage() {
  const { status } = useProtectedRoute();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users data
  useEffect(() => {
    if (status === "authenticated") {
      fetchUsers();
    }
  }, [status]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data.users);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching users:", err);
      setError(err.message || "An error occurred while fetching users");
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-text-primary">User Management</h1>

      {error && (
        <div className="bg-red-900/30 text-red-400 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Users List - 2/3 width on medium screens and above */}
        <div className="md:col-span-2">
          <div className="bg-surface rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-border-default">
              <h2 className="text-xl font-semibold text-text-primary">Admin Users</h2>
            </div>

            {/* Users table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border-default">
                <thead className="bg-surface-light">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-silver-dark uppercase tracking-wider"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-silver-dark uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-silver-dark uppercase tracking-wider"
                    >
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-surface divide-y divide-border-default">
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-center text-silver-dark">
                        No users found
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-text-primary">
                            {user.username}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-text-primary">
                            {user.name || "-"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-silver-dark">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add User Form - 1/3 width on medium screens and above */}
        <div className="md:col-span-1">
          <AdminUserForm onSuccess={fetchUsers} />
        </div>
      </div>
    </div>
  );
}
