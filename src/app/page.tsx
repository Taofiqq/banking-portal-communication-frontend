// app/dashboard/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./hooks/authContext";

export default function DashboardPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  console.log("isAuthenticated", isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to the Dashboard
        </h1>
        <p className="mt-4 text-gray-600">
          This is your dashboard. You can manage your activities, view
          analytics, and much more.
        </p>
      </div>
    </div>
  );
}
