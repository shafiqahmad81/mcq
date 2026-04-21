"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function ChangePasswordPage() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let err: any = {};

    if (!form.currentPassword)
      err.currentPassword = "Current password required";

    if (!form.newPassword || form.newPassword.length < 6)
      err.newPassword = "Min 6 characters required";

    if (form.newPassword !== form.confirmPassword)
      err.confirmPassword = "Password not match";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Password changed:", form);

    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="w-full py-6 lg:px-6">

      <div className="w-full bg-white border shadow-lg rounded-2xl p-6">

        {/* TITLE */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <Lock className="text-emerald-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold">
            Change Password
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Update your account password securely
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* CURRENT PASSWORD */}
          <div className="relative">
            <input
              type={show.current ? "text" : "password"}
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              placeholder="Current Password"
              className="w-full border px-4 py-3 rounded-xl pr-10"
            />

            <button
              type="button"
              onClick={() =>
                setShow({ ...show, current: !show.current })
              }
              className="absolute right-3 top-3 text-gray-500"
            >
              {show.current ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.currentPassword && (
            <p className="text-red-500 text-sm">
              {errors.currentPassword}
            </p>
          )}

          {/* NEW PASSWORD */}
          <div className="relative">
            <input
              type={show.new ? "text" : "password"}
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full border px-4 py-3 rounded-xl pr-10"
            />

            <button
              type="button"
              onClick={() =>
                setShow({ ...show, new: !show.new })
              }
              className="absolute right-3 top-3 text-gray-500"
            >
              {show.new ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.newPassword && (
            <p className="text-red-500 text-sm">
              {errors.newPassword}
            </p>
          )}

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input
              type={show.confirm ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border px-4 py-3 rounded-xl pr-10"
            />

            <button
              type="button"
              onClick={() =>
                setShow({ ...show, confirm: !show.confirm })
              }
              className="absolute right-3 top-3 text-gray-500"
            >
              {show.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition cursor-pointer"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}