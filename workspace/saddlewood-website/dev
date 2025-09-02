#!/bin/bash
# Production deployment script for Replit
export NODE_ENV=production
cd /home/runner/workspace/workspace/saddlewood-website
npm ci --only=production
npm run build
exec npm run start