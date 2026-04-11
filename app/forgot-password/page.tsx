
import ForgotPassword from "@/components/forms/forgotPassword";
import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-gray-50">
      <div className="container">
        <div className="min-h-[80vh] flex items-center justify-center px-4">

          <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6">

            {/* Title */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                Forgot Password
              </h2>
              <p className="text-gray-500 text-sm">
                Enter your phone number to reset your password
              </p>
            </div>

            {/* Form */}
            <ForgotPassword />

            {/* Back to login */}
            <div className="text-center text-sm">
              <Link
                href="/login"
                className="text-green-600 hover:underline text-base sm:text-lg font-medium"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}