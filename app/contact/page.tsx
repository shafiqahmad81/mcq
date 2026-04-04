export default function ContactPage() {
  return (
    <div className="min-h-[85vh] bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8 md:py-16">
      <div className="max-w-3xl w-full bg-white rounded-xl sm:rounded-3xl shadow-xl p-4 sm:p-8 md:p-12">
        <h1 className="mb-4 sm:mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-8 text-center">
          We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
        </p>

        <form className="space-y-3 sm:space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-blue-500 transition"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs bg-white px-1 transition-all"
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-blue-500 transition"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs bg-white px-1 transition-all"
            >
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 h-20 sm:h-36 focus:outline-none focus:border-blue-500 transition resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-400 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-xs bg-white px-1 transition-all"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-purple-600 transition transform text-white font-semibold py-2 sm:py-3 rounded-xl shadow-lg cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}