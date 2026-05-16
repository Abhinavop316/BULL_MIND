"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

export default function DashboardPage() {
  const router = useRouter();

  const { user, logout, loadUser } = useAuthStore();

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex items-center justify-between border-b border-zinc-800 p-4">
        <h1 className="text-2xl font-bold">AI Trading Platform</h1>

        <button
          onClick={() => {
            logout();

            router.push("/login");
          }}
          className="rounded-lg bg-red-600 px-4 py-2"
        >
          Logout
        </button>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold">
          Welcome {user?.fullname.firstname}
        </h2>
      </div>
    </div>
  );
}
