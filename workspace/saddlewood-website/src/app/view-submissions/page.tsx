import { getAllSubmissions } from '@/lib/contact-storage';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function ViewSubmissionsPage() {
  // Get all submissions
  const submissions = getAllSubmissions();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Contact Form Submissions</h1>
        <Link 
          href="/"
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
      </div>

      {submissions.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-medium text-gray-700">No submissions yet</h2>
          <p className="mt-2 text-gray-500">When customers submit the contact form, their requests will appear here.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{submission.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.phone || 'N/A'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.service 
                      ? submission.service.charAt(0).toUpperCase() + submission.service.slice(1) 
                      : 'Not specified'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(submission.submittedAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => {
                        // Show submission details in an alert for simplicity
                        alert(
                          `Submission Details:\n\n` +
                          `Name: ${submission.name}\n` +
                          `Email: ${submission.email}\n` +
                          `Phone: ${submission.phone || 'Not provided'}\n` +
                          `Address: ${submission.address}\n` +
                          `Service: ${submission.service || 'Not specified'}\n\n` +
                          `Message:\n${submission.message}\n\n` +
                          `Submitted: ${new Date(submission.submittedAt).toLocaleString()}`
                        );
                      }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">About This Page</h2>
        <p className="text-gray-600 mb-3">
          This page shows all contact form submissions stored locally in the application.
          It serves as a fallback when email notifications cannot be sent.
        </p>
        <p className="text-gray-600 mb-3">
          <strong>Note:</strong> For security, in a production environment, you would protect this page with 
          authentication and use a database instead of a local file.
        </p>
        <p className="text-gray-600">
          <strong>Troubleshooting:</strong> If you're not receiving email notifications, check your 
          SendGrid API key and make sure your sender email is verified in your SendGrid account.
        </p>
      </div>
    </div>
  );
}