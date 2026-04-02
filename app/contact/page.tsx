export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full border p-3 rounded-xl" placeholder="Name" />
        <input className="w-full border p-3 rounded-xl" placeholder="Email" />
        <textarea className="w-full border p-3 rounded-xl h-40" placeholder="Message"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">Send</button>
      </form>
    </div>
  );
}