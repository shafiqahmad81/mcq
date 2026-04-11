"use client";

import { useState } from "react";
import PasswordInput from "@/components/input/passwordField";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import InputField from "@/components/input/inputField";

export default function Page() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: "",
    };

    let valid = true;

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
      valid = false;
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Register Success", form);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 py-4 px-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* First Name */}
          <div>
            
            < InputField
              label="First Name"
              name="email"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            < InputField
              label="Last Name"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600 font-medium inline-block mb-1">
              Phone number <span className="text-red-700">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              maxLength={11}
              className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>

            < InputField
              label="E-Mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-Mail"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <PasswordInput
              label="Password Confirmation"
              placeholder="Enter password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms */}
          <div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                className="w-3 sm:w-4 h-3 sm:h-4"
              />
              <label className="text-base sm:text-lg">
                I agree to
                <Link
                  className="text-blue-600 hover:underline"
                  href={"terms"}
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>
           
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Register
          </button>

          {/* Social */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-500">
              Or Register With
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-3"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button
              type="button"
              className="border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2"
            >
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>
          </div>

          <p className="text-center text-lg text-gray-700">
            I have an account?{" "}
            <Link
              href="/login"
              className="text-emerald-600 font-medium hover:underline"
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}