"use client";

import { useState } from "react";

import api from "@/services/api";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();

  const setAuth = useAuthStore((state) => state.setAuth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", formData);

      setAuth(res.data.user, res.data.token);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <h1 className="mb-6 text-3xl font-bold">Login</h1>

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-lg bg-zinc-800 p-3 outline-none"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-lg bg-zinc-800 p-3 outline-none"
            onChange={handleChange}
          />

          <button
            onClick={handleLogin}
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
