import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from 'express-rate-limit';

// Define the rate limit in requests per minute
const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

// In-memory store for rate limiting
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();

/**
 * Rate limiting middleware for Next.js API routes
 * @param request The Next.js request object
 * @returns Response or null to continue
 */
export async function withRateLimit(request: NextRequest) {
  // Get the IP address from the request
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  // Get or initialize the request count for this IP
  let requestData = ipRequestCounts.get(ip);
  if (!requestData || requestData.resetTime < now) {
    // New entry or reset expired entry
    requestData = { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };
    ipRequestCounts.set(ip, requestData);
  }

  // Increment request count
  requestData.count += 1;

  // Check if rate limit exceeded
  if (requestData.count > RATE_LIMIT_REQUESTS) {
    // Calculate time remaining until reset
    const timeRemaining = Math.ceil((requestData.resetTime - now) / 1000);
    
    // Return rate limit exceeded response
    return NextResponse.json({
      success: false,
      message: 'Rate limit exceeded. Please try again later.',
      retryAfter: timeRemaining,
    }, {
      status: 429,
      headers: {
        'Retry-After': timeRemaining.toString(),
        'X-RateLimit-Limit': RATE_LIMIT_REQUESTS.toString(),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': Math.ceil(requestData.resetTime / 1000).toString(),
      },
    });
  }

  // Set rate limit headers on the response
  const remainingRequests = Math.max(0, RATE_LIMIT_REQUESTS - requestData.count);
  
  // The middleware will add these headers to the response
  const responseHeaders = {
    'X-RateLimit-Limit': RATE_LIMIT_REQUESTS.toString(),
    'X-RateLimit-Remaining': remainingRequests.toString(),
    'X-RateLimit-Reset': Math.ceil(requestData.resetTime / 1000).toString(),
  };

  // Continue to the handler but with the rate limit headers
  return null;
}

/**
 * Cleanup function to prevent memory leaks in the rate limit store
 * Call this periodically if your application runs for extended periods
 */
export function cleanupRateLimitStore() {
  const now = Date.now();
  // Use forEach instead of for...of to avoid downlevelIteration issue
  ipRequestCounts.forEach((data, ip) => {
    if (data.resetTime < now) {
      ipRequestCounts.delete(ip);
    }
  });
}

// Set up a cleanup interval (every 10 minutes)
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupRateLimitStore, 10 * 60 * 1000);
}