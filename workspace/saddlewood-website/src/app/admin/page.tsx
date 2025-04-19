"use client";

import { useEffect, useState } from "react";
import { useProtectedRoute } from "@/lib/auth/protected-route";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

// Lead type definition
type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  processed: boolean;
  createdAt: string;
};

export default function AdminDashboard() {
  const { session, status } = useProtectedRoute();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("all"); // all, new, contacted, completed

  // Fetch leads data
  useEffect(() => {
    if (status === "authenticated") {
      fetchLeads();
    }
  }, [status]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/leads");
      
      if (!response.ok) {
        throw new Error("Failed to fetch leads");
      }
      
      const data = await response.json();
      setLeads(data.leads);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching leads:", err);
      setError(err.message || "An error occurred while fetching leads");
    } finally {
      setLoading(false);
    }
  };

  // Handle status update
  const updateLeadStatus = async (leadId: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update lead status");
      }
      
      // Refresh leads data
      fetchLeads();
    } catch (err: any) {
      console.error("Error updating lead status:", err);
      setError(err.message || "An error occurred while updating lead status");
    }
  };

  // Filter leads based on selected tab
  const filteredLeads = leads.filter((lead) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "new") return lead.status === "new";
    if (selectedTab === "contacted") return lead.status === "contacted";
    if (selectedTab === "completed") return lead.status === "completed";
    return true;
  });

  // Loading state
  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600">
            Welcome, {session?.user?.name || session?.user?.username}
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Lead Management</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`px-6 py-3 ${
              selectedTab === "all"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("all")}
          >
            All Leads
          </button>
          <button
            className={`px-6 py-3 ${
              selectedTab === "new"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("new")}
          >
            New
          </button>
          <button
            className={`px-6 py-3 ${
              selectedTab === "contacted"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("contacted")}
          >
            Contacted
          </button>
          <button
            className={`px-6 py-3 ${
              selectedTab === "completed"
                ? "border-b-2 border-black font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("completed")}
          >
            Completed
          </button>
        </div>

        {/* Leads table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-6 py-3 text-gray-500 font-medium">Name</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Email</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Service</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Date</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Status</th>
                <th className="px-6 py-3 text-gray-500 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No leads found
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{lead.name}</td>
                    <td className="px-6 py-4">{lead.email}</td>
                    <td className="px-6 py-4">
                      {lead.service || "Not specified"}
                    </td>
                    <td className="px-6 py-4">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${
                          lead.status === "new"
                            ? "bg-blue-100 text-blue-800"
                            : lead.status === "contacted"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="text-black hover:underline"
                        >
                          View
                        </Link>
                        <div className="text-gray-300">|</div>
                        <div className="relative group inline-block">
                          <button className="text-black hover:underline">
                            Update
                          </button>
                          <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md shadow-lg mt-1 right-0">
                            <div className="py-1">
                              <button
                                onClick={() =>
                                  updateLeadStatus(lead.id, "new")
                                }
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                              >
                                Mark as New
                              </button>
                              <button
                                onClick={() =>
                                  updateLeadStatus(lead.id, "contacted")
                                }
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                              >
                                Mark as Contacted
                              </button>
                              <button
                                onClick={() =>
                                  updateLeadStatus(lead.id, "completed")
                                }
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                              >
                                Mark as Completed
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}