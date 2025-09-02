import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You - Saddlewood Contracting',
  description: 'Thank you for contacting Saddlewood Contracting. We have received your request and will respond within one business day.',
  robots: {
    index: false, // Don't index thank you pages
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Message Has Been Received
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for choosing Saddlewood Contracting for your home service needs.
          </p>
        </div>

        {/* Thank You Message with GoHighLevel Integration */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #dcdcdc',
            padding: '20px',
            borderRadius: '8px',
            fontFamily: "'Helvetica Neue', Arial, sans-serif"
          }}>
            <h2 style={{
              color: '#1e293b',
              marginBottom: '0.5em'
            }}>
              Thank you for your interest!
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#334155',
              marginTop: '0'
            }}>
              We appreciate you reaching out to us. Your request has been received and assigned to our team. We typically respond within one business day.
            </p>
            <p style={{
              fontSize: '16px',
              color: '#334155'
            }}>
              If you'd like to speak with someone sooner, call us at{' '}
              <a 
                href="tel:480-999-6100" 
                style={{ color: '#3b82f6' }}
              >
                (480) 999‑6100
              </a>{' '}
              or book a consultation using the calendar below.
            </p>
            
            <div style={{ margin: '20px 0' }}>
              {/* GoHighLevel Calendar Embed Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Schedule Your Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  GoHighLevel calendar embed will be placed here
                </p>
                <div className="text-sm text-gray-500">
                  <p>This placeholder will be replaced with your GoHighLevel calendar widget</p>
                </div>
              </div>
            </div>

            <p style={{
              fontSize: '16px',
              color: '#334155',
              marginBottom: '0.3em'
            }}>
              In the meantime, feel free to explore:
            </p>
            <ul style={{
              fontSize: '16px',
              color: '#334155',
              paddingLeft: '20px',
              marginTop: '0'
            }}>
              <li>
                <Link 
                  href="/services" 
                  style={{ color: '#3b82f6' }}
                  className="hover:underline"
                >
                  Our complete service offerings
                </Link>
              </li>
              <li>
                <Link 
                  href="/demo" 
                  style={{ color: '#3b82f6' }}
                  className="hover:underline"
                >
                  View our project gallery
                </Link>
              </li>
            </ul>

            <p style={{
              fontSize: '16px',
              color: '#334155',
              marginTop: '1em'
            }}>
              Here's what our clients say:
            </p>
            <blockquote style={{
              fontStyle: 'italic',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#eef2ff',
              borderLeft: '4px solid #6366f1'
            }}>
              "Saddlewood transformed our kitchen beyond our expectations. Professional, timely, and excellent quality work. Highly recommend!" – Sarah M., Phoenix
            </blockquote>

            <p style={{
              fontSize: '14px',
              color: '#64748b'
            }}>
              Know someone who might need our services?{' '}
              <Link 
                href="/contact" 
                style={{ color: '#6366f1' }}
                className="hover:underline"
              >
                Refer a friend and help them get quality home services
              </Link>.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-20">Phone:</span>
                <a href="tel:480-999-6100" className="text-primary hover:text-primary/80">
                  (480) 999-6100
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-20">Email:</span>
                <a href="mailto:info@saddlewoodcontracting.com" className="text-primary hover:text-primary/80">
                  info@saddlewoodcontracting.com
                </a>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-gray-700 w-20">Service:</span>
                <span className="text-gray-600">Phoenix Metro Area</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Monday - Friday:</span>
                <span className="text-gray-600">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Saturday:</span>
                <span className="text-gray-600">9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Sunday:</span>
                <span className="text-gray-600">Emergency Only</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Emergency Services:</strong> Available 24/7 for urgent HVAC, electrical, and plumbing issues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}