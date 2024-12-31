"use client";

import React from "react";
import { useAuth } from "@/app/hooks/authContext";
import { useRouter } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/solid";

const Header = () => {
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  console.log("user", user);
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold text-black">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <UserCircleIcon className="h-8 w-8 text-gray-500" />
          <span className="ml-2 font-medium text-gray-700">Guest</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
