// src/app/components/ProtectedRoute.tsx
"use client";

import { useAuth } from "../hooks/authContext"; // Assuming useAuth is implemented in authContext
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  console.log("protected route", isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/auth/login");
    }
  }, [isAuthenticated, router]);

  // Render children if the user is authenticated
  if (!isAuthenticated) {
    return null; // Or a loading spinner while the check is happening
  }

  return <>{children}</>;
};

export default ProtectedRoute;
