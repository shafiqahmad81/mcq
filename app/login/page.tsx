"use client";

import { useState } from "react";
import FormInput from "@/components/input/formInput";
import PasswordInput from "@/components/input/passwordInput";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // typing করলে error remove
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      email: !form.email.trim(),
      password: !form.password.trim(),
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log("Login Success", form);
    }
  };

  return (
    <section className="min-h-[90vh] bg-gray-100 flex items-center justify-center px-4 py-5 md:py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-3 sm:p-6 md:p-10 lg:p-14">
        <h1 className="text-black mb-5 md:mb-10">Hi, Welcome back!</h1>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Email / Phone */}
          <div>
            <FormInput
              label="Your phone or email"
              name="email"
              placeholder="Phone number or email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                Email or phone is required
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <PasswordInput
              label="Password"
              placeholder="Enter password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password is required
              </p>
            )}
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between gap-4 text-sm sm:text-base flex-wrap">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Keep"
                className="w-3 sm:w-4 h-3 sm:h-4 cursor-pointer"
              />
              <label
                className="text-base sm:text-lg text-gray-600"
                htmlFor="Keep"
              >
                Keep me signed in
              </label>
            </div>

            <Link
              href="/forgot-password"
              className="text-base sm:text-lg text-gray-600 hover:text-emerald-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-2xl font-medium transition cursor-pointer"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-500">Or Register With</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Social Login */}
          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button
              type="button"
              className="border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 transition"
            >
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div>
        </form>

        <p className="text-center mt-5 sm:mt-8 text-base sm:text-lg text-gray-700">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-base sm:text-lg text-emerald-600 font-medium hover:underline cursor-pointer"
          >
            Register Now
          </Link>
        </p>
      </div>
    </section>
  );
}