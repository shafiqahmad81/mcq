"use client";

import { useState } from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (val: string) => {
    if (required && !val.trim()) {
      setError(`${label} is required`);
      return false;
    }

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (val && !emailRegex.test(val)) {
        setError("Invalid email address");
        return false;
      }
    }

    setError("");
    return true;
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-600 mb-1 sm:mb-2 block">
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={(e) => validate(e.target.value)}
        className={`w-full border rounded-md py-2 sm:py-3 px-3 sm:px-4 outline-none 
        ${error ? "border-red-500" : "border-gray-300"}
        focus:border-emerald-500`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}