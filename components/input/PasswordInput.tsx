"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

export default function PasswordInput({
  placeholder = "Password",
  name,
  value,
  onChange,
  label,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full space-y-2">
      
      {label && (
        <label htmlFor="password"  className="text-sm text-gray-600 font-medium inline-block mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        <input 
          id="password"
          type={show ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 pr-12 outline-none focus:border-emerald-500"
        />

        {/* Toggle */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}