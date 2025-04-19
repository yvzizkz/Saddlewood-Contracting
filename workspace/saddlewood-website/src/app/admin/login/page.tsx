"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Login form validation schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

// Admin registration form schema
const registrationSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
  });

  // Login form hook
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Registration form hook
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
    reset: resetRegisterForm,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  // Handle login submit
  const onLoginSubmit = async (data: LoginFormData) => {
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: '',
    });

    try {
      const result = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setFormStatus({
          submitting: false,
          success: false,
          error: true,
          message: 'Invalid username or password',
        });
        return;
      }

      // Redirect to admin dashboard
      router.push('/admin');
    } catch (error) {
      console.error('Login error:', error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'An error occurred during login',
      });
    }
  };

  // Handle registration submit
  const onRegisterSubmit = async (data: RegistrationFormData) => {
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: '',
    });

    try {
      const response = await fetch('/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Registration successful! You can now log in.',
      });

      resetRegisterForm();
      setIsLogin(true);
    } catch (error: any) {
      console.error('Registration error:', error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: error.message || 'An error occurred during registration',
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-200px)]">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Admin Portal</h1>
          
          {/* Toggle between login and register */}
          <div className="flex mb-6 border rounded-md overflow-hidden">
            <button
              className={`flex-1 py-3 text-center transition-colors ${isLogin ? 'bg-black text-white' : 'bg-gray-100'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-3 text-center transition-colors ${!isLogin ? 'bg-black text-white' : 'bg-gray-100'}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
          
          {/* Status messages */}
          {formStatus.success && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
              {formStatus.message}
            </div>
          )}
          
          {formStatus.error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
              {formStatus.message}
            </div>
          )}
          
          {/* Login Form */}
          {isLogin ? (
            <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  {...registerLogin('username')}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                    ${loginErrors.username ? 'border-red-500' : 'border-gray-300'}`}
                />
                {loginErrors.username && (
                  <p className="text-red-500 text-sm mt-1">{loginErrors.username.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...registerLogin('password')}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                    ${loginErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                />
                {loginErrors.password && (
                  <p className="text-red-500 text-sm mt-1">{loginErrors.password.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Logging in...' : 'Login'}
              </button>
            </form>
          ) : (
            /* Registration Form */
            <form onSubmit={handleRegisterSubmit(onRegisterSubmit)} className="space-y-4">
              <div>
                <label htmlFor="reg-username" className="block text-gray-700 font-medium mb-2">
                  Username
                </label>
                <input
                  id="reg-username"
                  type="text"
                  {...registerRegister('username')}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                    ${registerErrors.username ? 'border-red-500' : 'border-gray-300'}`}
                />
                {registerErrors.username && (
                  <p className="text-red-500 text-sm mt-1">{registerErrors.username.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="reg-name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="reg-name"
                  type="text"
                  {...registerRegister('name')}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                    ${registerErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {registerErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{registerErrors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="reg-password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  id="reg-password"
                  type="password"
                  {...registerRegister('password')}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors
                    ${registerErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                />
                {registerErrors.password && (
                  <p className="text-red-500 text-sm mt-1">{registerErrors.password.message}</p>
                )}
              </div>
              

              
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? 'Registering...' : 'Register'}
              </button>
            </form>
          )}
        </div>
      </div>
      
      {/* Right side - Hero Section */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 md:p-12 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Saddlewood Admin</h2>
          <p className="text-lg mb-6">
            Manage your leads, track communications, and stay on top of your business with the Saddlewood Contracting admin dashboard.
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-black mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <p className="text-gray-700">View and manage all contact form submissions</p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-black mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <p className="text-gray-700">Track communications with potential clients</p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-black mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <p className="text-gray-700">Organize leads by service type and status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}