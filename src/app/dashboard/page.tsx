"use client";

import React from "react";
import { useAuth } from "../hooks/authContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../hooks/ProtectedRoute";

export default function DashboardPage() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to the Dashboard
          </h1>
          <p className="mt-4 text-gray-600">
            This is your dashboard. You can manage your activities, view
            analytics, and much more.
          </p>
          <button
            onClick={handleLogout}
            className="mt-6 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
