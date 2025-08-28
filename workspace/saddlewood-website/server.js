#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Change to the correct directory
process.chdir(path.join(__dirname));

// Run the production build and start sequence
console.log('Starting production build process...');

const build = spawn('npm', ['run', 'build'], { 
  stdio: 'inherit',
  env: { ...process.env }
});

build.on('close', (code) => {
  if (code === 0) {
    console.log('Build completed successfully. Starting production server...');
    const start = spawn('npm', ['run', 'start'], { 
      stdio: 'inherit',
      env: { ...process.env }
    });
    
    start.on('close', (startCode) => {
      process.exit(startCode);
    });
  } else {
    console.error('Build failed with code:', code);
    process.exit(code);
  }
});