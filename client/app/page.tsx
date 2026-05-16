"use client";

import { useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function SignupPage() {
  const router = useRouter();

  const setAuth = useAuthStore((state) => state.setAuth);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      const res = await api.post("/auth/signup", {
        fullname: {
          firstname: formData.firstname,
          lastname: formData.lastname,
        },
        email: formData.email,
        password: formData.password,
      });

      setAuth(res.data.user, res.data.token);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <h1 className="mb-6 text-3xl font-bold">Create Account</h1>

        <div className="space-y-4">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="w-full rounded-lg bg-zinc-800 p-3 outline-none"
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="w-full rounded-lg bg-zinc-800 p-3 outline-none"
            onChange={handleChange}
          />

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
            onClick={handleSignup}
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold hover:bg-blue-700"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
