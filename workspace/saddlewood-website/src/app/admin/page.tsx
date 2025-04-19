"use client";

import { useEffect, useState } from "react";
import { useProtectedRoute } from "@/lib/auth/protected-route";
import Link from "next/link";
import AdminUserForm from "@/components/AdminUserForm";

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
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterProcessed, setFilterProcessed] = useState<string>("all");

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

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const statusMatch = filterStatus === "all" || lead.status === filterStatus;
    const processedMatch =
      filterProcessed === "all" ||
      (filterProcessed === "true" && lead.processed) ||
      (filterProcessed === "false" && !lead.processed);
    
    return statusMatch && processedMatch;
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
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Leads Section - 2/3 width on medium screens and above */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h2 className="text-xl font-semibold">Leads</h2>
            </div>
            
            {/* Filters */}
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full md:w-auto rounded-md border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Processed
                  </label>
                  <select
                    value={filterProcessed}
                    onChange={(e) => setFilterProcessed(e.target.value)}
                    className="w-full md:w-auto rounded-md border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="all">All</option>
                    <option value="true">Processed</option>
                    <option value="false">Unprocessed</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Leads table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Service
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Processed
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                        No leads found
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            {lead.name}
                          </div>
                          <div className="text-sm text-gray-500">{lead.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {lead.service
                            ? lead.service.charAt(0).toUpperCase() +
                              lead.service.slice(1)
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
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
                            {lead.status.charAt(0).toUpperCase() +
                              lead.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${
                                lead.processed
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                          >
                            {lead.processed ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link
                            href={`/admin/leads/${lead.id}`}
                            className="text-black hover:underline"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Admin User Management - 1/3 width on medium screens and above */}
        <div className="md:col-span-1">
          <div className="space-y-8">
            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b">
                <h2 className="text-xl font-semibold">Overview</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Leads:</span>
                  <span className="font-medium">{leads.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">New Leads:</span>
                  <span className="font-medium">
                    {leads.filter(lead => lead.status === 'new').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Processed Leads:</span>
                  <span className="font-medium">
                    {leads.filter(lead => lead.processed).length}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Admin User Form Component */}
            <AdminUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}