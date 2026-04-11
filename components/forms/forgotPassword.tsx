"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // only numbers
    setPhone(value);

    if (value) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.trim()) {
      setError("Phone number is required");
      return;
    }

    console.log("Send reset link:", phone);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-sm text-gray-600 font-medium inline-block mb-1">
          Phone number <span className="text-red-500">*</span>
        </label>

        <input
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="Enter your phone"
          maxLength={11}
          className="w-full border border-gray-300 rounded-md py-2 sm:py-3 px-3 sm:px-4 mt-1 outline-none focus:border-emerald-500"
        />

        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-semibold shadow transition cursor-pointer"
      >
        Send Reset Link
      </button>
    </form>
  );
}