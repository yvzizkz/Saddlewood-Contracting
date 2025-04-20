"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAdminAuth } from "@/lib/auth/admin-auth-context";

// Form schema validation
const adminUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().optional(),
});

type AdminUserFormData = z.infer<typeof adminUserSchema>;

interface AdminUserFormProps {
  onSuccess?: () => void;
}

export default function AdminUserForm({ onSuccess }: AdminUserFormProps) {
  const { register: registerUser } = useAdminAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AdminUserFormData>({
    resolver: zodResolver(adminUserSchema),
    defaultValues: {
      username: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (data: AdminUserFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);

      // Try our context method first
      try {
        const success = await registerUser(data.username, data.password, data.name);
        
        if (!success) {
          throw new Error("Registration failed");
        }
        
        setSubmitSuccess(true);
        reset();
        
        // Call the onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
        return;
      } catch (contextError) {
        console.error("Context registration failed, trying API directly:", contextError);
      }

      // Fallback to direct API call if context method fails
      const response = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create admin user");
      }

      setSubmitSuccess(true);
      reset();
      
      // Call the onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      setSubmitError(error.message || "An error occurred");
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">Create Admin User</h2>
      </div>
      <div className="p-6">
        {submitSuccess && (
          <div className="mb-6 bg-green-100 text-green-700 p-4 rounded-md">
            Admin user created successfully!
          </div>
        )}

        {submitError && (
          <div className="mb-6 bg-red-100 text-red-700 p-4 rounded-md">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register("username")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name (Optional)
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {isSubmitting ? "Creating..." : "Create Admin User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}