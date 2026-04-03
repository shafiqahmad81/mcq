import PasswordInput from "@/components/input/PasswordInput";

export default function RegisterPage() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 py-2 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Register
        </h2>

        <form className="space-y-4">
          
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
              User Name
            </label>
            <input
              type="text"
              placeholder="User Name"
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

          

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}