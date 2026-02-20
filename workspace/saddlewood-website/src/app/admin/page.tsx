"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminUserForm from "@/components/AdminUserForm";
import AdminDashboardCharts from "@/components/AdminDashboardCharts";
import { useAdminAuth } from "@/lib/auth/admin-auth-context";

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
  const { user } = useAdminAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterProcessed, setFilterProcessed] = useState<string>("all");
  const [dataFetched, setDataFetched] = useState(false);

  // Fetch leads data
  useEffect(() => {
    // Only fetch data if user is authenticated and we haven't fetched yet
    if (user && !dataFetched) {
      fetchLeads();
      setDataFetched(true);
    }
  }, [user, dataFetched]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/leads");

      if (!response.ok) {
        console.warn("Failed to fetch leads from API, using empty array");
        // Use empty array as fallback
        setLeads([]);
        setError("Could not fetch leads from server. Using empty dataset.");
        return;
      }

      const data = await response.json();
      setLeads(data.leads || []);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching leads:", err);
      // Use empty array as fallback
      setLeads([]);
      setError("An error occurred while fetching leads. Using empty dataset.");
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
  const { loading: authLoading } = useAdminAuth();

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-text-primary">Admin Dashboard</h1>

      {error && (
        <div className="bg-red-900/30 text-red-400 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      {/* Analytics Charts */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-text-primary">Analytics</h2>
        <AdminDashboardCharts leads={leads} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Leads Section - 2/3 width on medium screens and above */}
        <div className="md:col-span-2">
          <div className="bg-surface rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-border-default">
              <h2 className="text-xl font-semibold text-text-primary">Leads</h2>
            </div>

            {/* Filters */}
            <div className="p-4 bg-surface-light border-b border-border-default">
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Status
                  </label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full md:w-auto rounded-md border border-border-default bg-surface-light text-text-primary py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Processed
                  </label>
                  <select
                    value={filterProcessed}
                    onChange={(e) => setFilterProcessed(e.target.value)}
                    className="w-full md:w-auto rounded-md border border-border-default bg-surface-light text-text-primary py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold"
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
              <table className="min-w-full divide-y divide-border-default">
                <thead className="bg-surface-light">
                  <tr>
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
                      Service
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-silver-dark uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-silver-dark uppercase tracking-wider"
                    >
                      Processed
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-silver-dark uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-silver-dark uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-surface divide-y divide-border-default">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-silver-dark">
                        No leads found
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-text-primary">
                            {lead.name}
                          </div>
                          <div className="text-sm text-silver-dark">{lead.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
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
                                  ? "bg-blue-900/30 text-blue-400"
                                  : lead.status === "contacted"
                                  ? "bg-yellow-900/30 text-yellow-400"
                                  : "bg-green-900/30 text-green-400"
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
                                  ? "bg-surface-light text-text-secondary"
                                  : "bg-red-900/30 text-red-400"
                              }`}
                          >
                            {lead.processed ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-silver-dark">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link
                            href={`/admin/leads/${lead.id}`}
                            className="text-gold hover:text-gold-light"
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
            <div className="bg-surface rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-border-default">
                <h2 className="text-xl font-semibold text-text-primary">Overview</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Total Leads:</span>
                  <span className="font-medium text-text-primary">{leads.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">New Leads:</span>
                  <span className="font-medium text-text-primary">
                    {leads.filter(lead => lead.status === 'new').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Processed Leads:</span>
                  <span className="font-medium text-text-primary">
                    {leads.filter(lead => lead.processed).length}
                  </span>
                </div>
              </div>
            </div>

            {/* Admin User Form Component */}
            <AdminUserForm onSuccess={fetchLeads} />
          </div>
        </div>
      </div>
    </div>
  );
}
