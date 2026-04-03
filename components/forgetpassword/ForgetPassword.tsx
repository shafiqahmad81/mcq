"use client";

import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Forgot Password
          </h2>
          <p className="text-gray-500 text-sm">
            Enter your email to reset your password
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          
          <div>
            <label className="text-sm text-gray-600 font-medium inline-block mb-1">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md py-2 sm:py-3 px-3 sm:px-4 mt-1 outline-none focus:border-emerald-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-semibold shadow transition"
          >
            Send Reset Link
          </button>

        </form>

        {/* Back to login */}
        <div className="text-center text-sm">
          <Link
            href="/login"
            className="text-emerald-600 hover:underline font-medium"
          >
            Back to Login
          </Link>
        </div>

      </div>

    </div>
  );
}