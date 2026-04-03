import PasswordInput from "@/components/input/PasswordInput";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-6 sm:p-10 md:p-14">
        <h1 className=" text-black mb-5 md:mb-10">
          Hi, Welcome back!
        </h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2">Your Username or Email</label>
            <input
              id="email"
              type="email"
              placeholder="Username or Email Address"
              className="w-full border border-gray-300 rounded-md py-2 sm:py-3 px-3 sm:px-4 outline-none focus:border-emerald-500"
            />
          </div>

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