"use client";
import PasswordInput from "@/components/input/PasswordInput";
import Link from "next/link";
import { FaFacebookF} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


export default function RegisterPage() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 py-4 px-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow">
        
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Register
        </h2>

        <form className="space-y-3 sm:space-y-4">
          
          {/* First Name */}
          <div>
            <label className="text-sm text-gray-600 font-medium inline-block mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm text-gray-600 font-medium inline-block mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="text-sm text-gray-600 font-medium inline-block mb-1">
              Phone number
            </label>

            <input
              type="tel"
              placeholder="Phone number"
              maxLength={11}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
              }}
              className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 font-medium inline-block mb-1">
              E-Mail
            </label>
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
            />
          </div>

          {/* Password */}
          <div>
            
            <PasswordInput
              label="Password"
              placeholder="Enter password"
              name="password"
            />
          </div>

          {/* Confirm Password */}
          <div>
           
            <PasswordInput
              label="Password Confirmation"
              placeholder="Enter password"
              name="password"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="w-3 sm:w-4 h-3 sm:h-4"/>
            <label className="text-base sm:text-lg" htmlFor="terms">I agree to <Link className="text-blue-600 hover:underline" href={"trems"}>Terms & Conditions</Link></label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Register
          </button>

          
          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-500">
              Or Register With
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          

          {/* Social Login */}
          <div className="grid sm:grid-cols-2 gap-3">
            {/* Google Login */}
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


          <p className="text-center text-lg text-gray-700">
            I have an account?{" "}
            <Link href="/login" className="text-emerald-600 font-medium hover:underline cursor-pointer">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}