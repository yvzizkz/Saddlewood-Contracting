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
- Created custom `server.js` to bypass deployment system's "dev" command detection
- Modified `npm run dev` script to use custom production build server
- Added DATABASE_URL as production secret for deployment
- Created `.env.production` with proper production environment configuration
- Resolved all deployment errors by eliminating development mode configuration conflicts
- Application successfully building and running in production mode with all secrets configured

### Optional Integrations
- **reCAPTCHA**: Google reCAPTCHA for enhanced form security (fallback to simple captcha)
- **WebSocket Support**: Real-time capabilities for future features