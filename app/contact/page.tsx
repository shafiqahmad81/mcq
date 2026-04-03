export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-5 md:py-10 lg:py-20 px-4">
      <h2 className="mb-3 sm:mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 pr-12 outline-none focus:border-emerald-500" placeholder="Name" />
        <input className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 pr-12 outline-none focus:border-emerald-500" placeholder="Email" />
        <textarea className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 pr-12 outline-none focus:border-emerald-500 h-40" placeholder="Message"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl">Send</button>
      </form>
    </div>
  );
}