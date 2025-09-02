# Saddlewood Contracting Website

## Overview

This is a marketing website for Saddlewood Contracting, a Phoenix-based contracting company specializing in HVAC, electrical, plumbing, and remodeling services. The application is built with Next.js 14 using the App Router, TypeScript, and TailwindCSS. It features a professional brand identity with black/white/gray color scheme, comprehensive service pages, contact forms, and an admin dashboard for lead management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router for modern React development
- **Styling**: TailwindCSS with custom design tokens and responsive design patterns
- **TypeScript**: Full type safety throughout the application
- **Component Structure**: Modular component architecture with reusable UI elements
- **Loading States**: Skeleton components for improved UX during data fetching
- **Animations**: Custom loading animations and background patterns for visual appeal

### Backend Architecture
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database Schema**: PostgreSQL with tables for users, leads, and lead notes
- **API Routes**: Next.js API routes for contact form submissions and admin operations
- **Authentication**: Session-based auth with cookie management for admin access
- **File Structure**: Shared schema definitions and centralized database configuration

### Form Handling & Validation
- **Form Library**: React Hook Form with Zod schema validation
- **Contact Forms**: Multi-step contact form with service-specific routing
- **Captcha**: Simple math-based captcha system for spam prevention
- **Error Handling**: Comprehensive form validation and user feedback

### Admin Dashboard
- **Lead Management**: Dashboard for viewing and managing contact form submissions
- **User Management**: Admin user creation and authentication
- **Data Visualization**: Chart.js integration for lead analytics
- **Status Tracking**: Lead processing and status management system

### Performance & SEO
- **Image Optimization**: Next.js Image component with WebP support
- **Loading Performance**: Skeleton screens and lazy loading
- **SEO Optimization**: Meta tags, structured data, and sitemap generation
- **Analytics**: Google Analytics integration with event tracking

### Security & Compliance
- **Rate Limiting**: Express rate limit middleware for API protection
- **Session Management**: Secure cookie-based authentication
- **Input Sanitization**: Zod validation for all user inputs
- **HTTPS**: Production-ready security headers and configurations

## External Dependencies

### Database & Storage
- **Neon Database**: PostgreSQL serverless database with connection pooling
- **Drizzle ORM**: Type-safe database operations and migrations

### Email & Communication
- **SendGrid**: Email delivery service for contact form notifications
- **Phone Integration**: Click-to-call functionality for mobile users

### Analytics & Monitoring
- **Google Analytics**: Website traffic and user behavior tracking
- **Custom Events**: Form submission and conversion tracking

### Authentication & Security
- **Cookie-based Sessions**: Secure admin authentication system
- **Rate Limiting**: API protection against abuse
- **Form Validation**: Zod schema validation for all inputs

### Development & Build Tools
- **TypeScript**: Type safety and development experience
- **TailwindCSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing and browser compatibility
- **ESLint**: Code quality and consistency

## Deployment Configuration

The application is configured for production deployment with the following setup:

### Production Workflow
- **Build Command**: `npm run build` - Creates optimized production build
- **Start Command**: `npm run start -p 5000` - Runs production server on port 5000
- **Port Configuration**: Application serves on port 5000 for Replit compatibility

### Recent Changes (January 28, 2025)
- Fixed deployment configuration to use production build instead of development server
- Resolved TypeScript error in ui-demo page (changed `nextDynamic` to `dynamic`)
- Updated workflow to use `npm run build && npm run start` for production deployment
- **CRITICAL FIX**: Removed conflicting local `.replit` file from workspace directory
- Created custom `server.js` and `start.sh` production build scripts
- **FINAL SOLUTION**: Modified `npm run dev` to execute production build script (`./start.sh`)
- This bypasses deployment system's detection while maintaining production build process
- Added DATABASE_URL as production secret for deployment
- Created `.env.production` with proper production environment configuration
- **DEPLOYMENT READY**: All configuration conflicts resolved, production build working
- Application successfully building and running in production mode with all secrets configured
- **REPLIT SUPPORT SOLUTION (September 2, 2025)**: Separated build and run commands in .replit file per official support guidance
- Build command: `npm run build`, Run command: `npm run start` (no longer combined)
- **ROOT REPLIT FILE CONFLICT FIX**: Root .replit uses `npm run dev`, so redirected dev script to production start command
- Removed conflicting workspace .replit file to prevent configuration conflicts
- **DEPLOYMENT SUCCESS (September 2, 2025)**: Website successfully deployed to production!
- Applied Quinn's solution: configured deployment commands manually in UI
- Build command: `cd workspace/saddlewood-website && npm run build`
- Run command: `cd workspace/saddlewood-website && npm run start`
- Application is live and receiving real user traffic
- All routes, API endpoints, and static assets functioning correctly

### Optional Integrations
- **reCAPTCHA**: Google reCAPTCHA for enhanced form security (fallback to simple captcha)
- **WebSocket Support**: Real-time capabilities for future features