"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com" },
    { icon: FaTwitter, url: "https://twitter.com" },
    { icon: FaLinkedinIn, url: "https://linkedin.com" },
    { icon: FaInstagram, url: "https://instagram.com" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* LEFT FORM */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-500 mb-8">
            Have questions? Feel free to contact us anytime.
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="bg-gray-700 text-white p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <Link href="tel:+8801737-818099">+8801737-818099</Link>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <Link href="mailto:support@freemcq.com">support@freemcq.com</Link>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Rajshahi, Bangladesh</span>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.url}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}