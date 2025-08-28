#!/usr/bin/env node

// Production entry point that runs build and start
const { execSync } = require('child_process');
const path = require('path');

// Ensure we're in the correct directory
process.chdir(__dirname);

console.log('🔧 Building application for production...');

try {
  // Run build
  execSync('npm run build', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  console.log('✅ Build completed successfully!');
  console.log('🚀 Starting production server...');
  
  // Start the server
  execSync('npm run start', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
} catch (error) {
  console.error('❌ Production startup failed:', error.message);
  process.exit(1);
}