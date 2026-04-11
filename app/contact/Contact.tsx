"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com" },
    { icon: FaTwitter, url: "https://twitter.com" },
    { icon: FaLinkedinIn, url: "https://linkedin.com" },
    { icon: FaInstagram, url: "https://instagram.com" },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // phone only numbers
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");
      setForm((prev) => ({
        ...prev,
        phone: onlyNumbers,
      }));
      setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    let valid = true;

    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^01\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 11-digit BD phone";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Message Sent Successfully:", form);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* LEFT FORM */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-500 mb-8">
            Have questions? Feel free to contact us anytime.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-green-600"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-green-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                maxLength={11}
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-green-600"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={5}
                name="message"
                placeholder="Write your message..."
                className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition cursor-pointer"
            >
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
              <Link href="tel:+8801737818099">+8801737-818099</Link>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} />
              <Link href="mailto:support@freemcq.com">
                support@freemcq.com
              </Link>
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