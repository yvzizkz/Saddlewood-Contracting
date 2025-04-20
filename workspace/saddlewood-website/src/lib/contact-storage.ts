import fs from 'fs';
import path from 'path';

/**
 * Simple storage system for contact form submissions
 * Stores submissions in a JSON file as a fallback when email doesn't work
 */

// Define the contact submission type
export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  message: string;
  submittedAt: string;
};

// Path to the submissions file
const SUBMISSIONS_PATH = path.join(process.cwd(), 'contact-submissions.json');

/**
 * Get all submissions from the storage file
 */
export function getAllSubmissions(): ContactSubmission[] {
  try {
    if (!fs.existsSync(SUBMISSIONS_PATH)) {
      return [];
    }
    
    const fileContent = fs.readFileSync(SUBMISSIONS_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading submissions file:', error);
    return [];
  }
}

/**
 * Save a new contact form submission
 */
export function saveSubmission(submission: ContactSubmission): boolean {
  try {
    const submissions = getAllSubmissions();
    submissions.push(submission);
    
    // Save the updated submissions back to the file
    fs.writeFileSync(SUBMISSIONS_PATH, JSON.stringify(submissions, null, 2));
    console.log(`Submission ${submission.id} saved to file storage`);
    return true;
  } catch (error) {
    console.error('Error saving submission to file:', error);
    return false;
  }
}

/**
 * Get a single submission by ID
 */
export function getSubmissionById(id: string): ContactSubmission | null {
  try {
    const submissions = getAllSubmissions();
    const submission = submissions.find(sub => sub.id === id);
    return submission || null;
  } catch (error) {
    console.error('Error getting submission by ID:', error);
    return null;
  }
}