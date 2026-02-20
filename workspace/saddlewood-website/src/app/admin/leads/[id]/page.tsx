"use client";

import { useEffect, useState } from "react";
import { useProtectedRoute } from "@/lib/auth/protected-route";
import { useParams, useRouter } from "next/navigation";
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
  notes: string | null;
  processed: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function LeadDetailPage() {
  const { session, status } = useProtectedRoute();
  const params = useParams();
  const router = useRouter();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Fetch lead data
  useEffect(() => {
    if (status === "authenticated" && params.id) {
      fetchLead();
    }
  }, [status, params.id]);

  const fetchLead = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/leads/${params.id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch lead");
      }

      const data = await response.json();
      setLead(data.lead);
      setNotes(data.lead.notes || "");
      setError(null);
    } catch (err: any) {
      console.error("Error fetching lead:", err);
      setError(err.message || "An error occurred while fetching lead details");
    } finally {
      setLoading(false);
    }
  };

  // Update lead status
  const updateLeadStatus = async (newStatus: string) => {
    if (!lead) return;

    try {
      setSubmitting(true);
      const response = await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update lead status");
      }

      // Refresh lead data
      fetchLead();
    } catch (err: any) {
      console.error("Error updating lead status:", err);
      setError(err.message || "An error occurred while updating lead status");
    } finally {
      setSubmitting(false);
    }
  };

  // Update lead notes
  const updateLeadNotes = async () => {
    if (!lead) return;

    try {
      setSubmitting(true);
      const response = await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      });

      if (!response.ok) {
        throw new Error("Failed to update lead notes");
      }

      // Refresh lead data
      fetchLead();
    } catch (err: any) {
      console.error("Error updating lead notes:", err);
      setError(err.message || "An error occurred while updating lead notes");
    } finally {
      setSubmitting(false);
    }
  };

  // Mark as processed
  const markAsProcessed = async () => {
    if (!lead) return;

    try {
      setSubmitting(true);
      const response = await fetch(`/api/admin/leads/${lead.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ processed: !lead.processed }),
      });

      if (!response.ok) {
        throw new Error("Failed to update lead processed status");
      }

      // Refresh lead data
      fetchLead();
    } catch (err: any) {
      console.error("Error updating lead processed status:", err);
      setError(err.message || "An error occurred while updating lead processed status");
    } finally {
      setSubmitting(false);
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

  // Error state
  if (error || !lead) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-900/30 text-red-400 p-4 rounded-lg mb-8">
          {error || "Lead not found"}
        </div>
        <Link
          href="/admin"
          className="text-gold font-medium hover:underline"
        >
          &larr; Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/admin"
          className="text-gold font-medium hover:underline"
        >
          &larr; Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Lead Information Card */}
        <div className="md:col-span-2">
          <div className="bg-surface rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-border-default flex justify-between items-center">
              <h2 className="text-xl font-semibold text-text-primary">Lead Information</h2>
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
                {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
              </span>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-silver-dark">Name</h3>
                  <p className="mt-1 text-lg text-text-primary">{lead.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-silver-dark">Email</h3>
                  <p className="mt-1 text-lg text-text-primary">{lead.email}</p>
                </div>
                {lead.phone && (
                  <div>
                    <h3 className="text-sm font-medium text-silver-dark">Phone</h3>
                    <p className="mt-1 text-lg text-text-primary">{lead.phone}</p>
                  </div>
                )}
                {lead.service && (
                  <div>
                    <h3 className="text-sm font-medium text-silver-dark">
                      Service Needed
                    </h3>
                    <p className="mt-1 text-lg text-text-primary">
                      {lead.service.charAt(0).toUpperCase() + lead.service.slice(1)}
                    </p>
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-medium text-silver-dark">Message</h3>
                  <p className="mt-1 p-4 bg-surface-light rounded-md whitespace-pre-wrap text-text-secondary">
                    {lead.message}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-silver-dark">
                    Submission Date
                  </h3>
                  <p className="mt-1 text-text-primary">
                    {new Date(lead.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions and Notes Card */}
        <div className="md:col-span-1 space-y-8">
          {/* Status Actions */}
          <div className="bg-surface rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-border-default">
              <h2 className="text-lg font-semibold text-text-primary">Actions</h2>
            </div>
            <div className="p-6 space-y-4">
              <button
                onClick={() => updateLeadStatus("new")}
                disabled={lead.status === "new" || submitting}
                className={`w-full py-2 rounded-md text-center font-medium ${
                  lead.status === "new"
                    ? "bg-surface-raised text-silver-dark cursor-not-allowed"
                    : "bg-blue-900/30 text-blue-400 hover:bg-blue-900/50"
                }`}
              >
                Mark as New
              </button>
              <button
                onClick={() => updateLeadStatus("contacted")}
                disabled={lead.status === "contacted" || submitting}
                className={`w-full py-2 rounded-md text-center font-medium ${
                  lead.status === "contacted"
                    ? "bg-surface-raised text-silver-dark cursor-not-allowed"
                    : "bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/50"
                }`}
              >
                Mark as Contacted
              </button>
              <button
                onClick={() => updateLeadStatus("completed")}
                disabled={lead.status === "completed" || submitting}
                className={`w-full py-2 rounded-md text-center font-medium ${
                  lead.status === "completed"
                    ? "bg-surface-raised text-silver-dark cursor-not-allowed"
                    : "bg-green-900/30 text-green-400 hover:bg-green-900/50"
                }`}
              >
                Mark as Completed
              </button>
              <button
                onClick={markAsProcessed}
                className={`w-full py-2 rounded-md text-center font-medium ${
                  lead.processed
                    ? "bg-red-900/30 text-red-400 hover:bg-red-900/50"
                    : "bg-surface-light text-text-secondary hover:bg-surface-raised"
                }`}
              >
                {lead.processed ? "Mark as Unprocessed" : "Mark as Processed"}
              </button>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-surface rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-border-default">
              <h2 className="text-lg font-semibold text-text-primary">Notes</h2>
            </div>
            <div className="p-6">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-32 p-3 border border-border-default bg-surface-light text-text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
                placeholder="Add notes about this lead..."
              ></textarea>
              <div className="mt-4">
                <button
                  onClick={updateLeadNotes}
                  disabled={submitting}
                  className="px-4 py-2 bg-gold text-text-inverse rounded-md hover:bg-gold-dark transition-colors disabled:bg-surface-raised"
                >
                  {submitting ? "Saving..." : "Save Notes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
