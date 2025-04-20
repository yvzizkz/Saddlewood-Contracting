/**
 * Helper functions for reCAPTCHA verification
 */

/**
 * Verifies a reCAPTCHA token with Google's API
 * @param token The reCAPTCHA token to verify
 * @returns True if verification succeeded, false otherwise
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    // Skip verification in development mode for testing
    if (process.env.NODE_ENV === 'development' && process.env.SKIP_RECAPTCHA_VERIFICATION === 'true') {
      console.log('DEVELOPMENT MODE: Skipping reCAPTCHA verification');
      return true;
    }

    // Make sure we have a token
    if (!token) {
      console.warn('reCAPTCHA verification failed: No token provided');
      return false;
    }

    // Make sure we have a secret key
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('reCAPTCHA verification failed: No secret key configured');
      return false;
    }

    // Verify the token with Google's API
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    if (data.success) {
      return true;
    } else {
      console.warn('reCAPTCHA verification failed:', data['error-codes']);
      return false;
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}