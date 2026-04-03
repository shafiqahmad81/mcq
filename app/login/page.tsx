import FormInput from "@/components/input/Forminput";
import PasswordInput from "@/components/input/PasswordInput";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-6 sm:p-10 md:p-14">
        <h1 className=" text-black mb-5 md:mb-10">
          Hi, Welcome back!
        </h1>

        <form className="space-y-3 sm:space-y-4">

          <FormInput
            label="Your username or email"
            name="email"
            placeholder="Username or email address"
            required
          />

            <PasswordInput
              label="Password"
              placeholder="Enter password"
              name="password"
            />

          <div className="flex items-center justify-between gap-4 text-sm sm:text-base flex-wrap">
            <label className="flex items-center gap-3 text-black cursor-pointer">
              <input type="checkbox" className="w-5 h-5" />
              Keep me signed in
            </label>

            <Link href="forgetpassword" className="text-gray-500 hover:text-emerald-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="w-full py-2 sm:py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-2xl font-medium transition cursor-pointer">
            Sign In
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
        </form>
        <p className="text-center mt-8 text-lg text-gray-700">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-emerald-600 font-medium hover:underline cursor-pointer">
            Register Now
          </Link>
        </p>
      </div>
    </section>
  );
}