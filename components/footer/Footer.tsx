import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-pink-400 mb-3">MCQ Master</h3>
          <p className="text-sm text-gray-300 leading-6">
            বাংলাদেশের চাকরি, ভর্তি ও একাডেমিক প্রস্তুতির জন্য স্মার্ট MCQ প্ল্যাটফর্ম।
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-blue-400">Quick Links</h4>
          <div className="space-y-2 text-sm">
            <Link href="/">Home</Link><br />
            <Link href="/mcq">MCQ</Link><br />
            <Link href="/result">Result</Link><br />
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-blue-400">Categories</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>বাংলা</p>
            <p>English</p>
            <p>সাধারণ জ্ঞান</p>
            <p>বিজ্ঞান</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-blue-400">Contact</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Email: support@mcqmaster.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        © 2026 MCQ Master. All rights reserved.
      </div>
    </footer>
  );
}