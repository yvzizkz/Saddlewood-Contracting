#!/bin/bash
set -e

echo "🔧 Installing dependencies..."
npm install

echo "🏗️ Building application for production..."
npm run build

echo "🚀 Starting production server..."
npm run start