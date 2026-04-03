// pages/checkout.tsx
import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    orderNotes: "",
    createAccount: false,
  });

  // Type-safe handleChange for inputs and textareas
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;

    // For checkboxes, use checked; otherwise, use value
    const fieldValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted", formData);
    alert("Order submitted!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Billing Details */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold">Billing details</h2>

        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none focus:border-emerald-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">Phone *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none focus:border-emerald-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 border border-gray-300 rounded-md px-4 outline-none focus:border-emerald-500"
            required
          />
        </div>

        {/* Create Account Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="createAccount"
            checked={formData.createAccount}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Create an account?</label>
        </div>

        {/* Order Notes */}
        <div>
          <label className="block mb-1 font-medium">Order notes (optional)</label>
          <textarea
            name="orderNotes"
            value={formData.orderNotes}
            onChange={handleChange}
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-emerald-500"
            rows={5}
          />
        </div>

        {/* Submit Button (optional) */}
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-700 transition"
        >
          Submit Order
        </button>
      </form>

      {/* Order Summary */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Your Order</h2>
        <div className="border border-gray-200 rounded-md">
          <div className="grid grid-cols-2 p-4 border-b border-gray-200 font-medium">
            <span>PRODUCT</span>
            <span>SUBTOTAL</span>
          </div>
          <div className="grid grid-cols-2 p-4 border-b border-gray-200">
            <span>৪৭তম বিসিএস প্রিলিমিনারি প্রস্তুতি × 2</span>
            <span>৳200.00</span>
          </div>
          <div className="grid grid-cols-2 p-4 border-b border-gray-200">
            <span>Subtotal</span>
            <span>৳200.00</span>
          </div>
          <div className="grid grid-cols-2 p-4 font-bold text-red-600">
            <span>Total</span>
            <span>৳200.00</span>
          </div>
        </div>

        {/* Payment */}
        <h2 className="text-2xl font-semibold">Payment</h2>
        <div className="border border-gray-200 rounded-md p-4 space-y-4">
          <div className="flex items-center space-x-3">
            <input type="radio" checked readOnly className="accent-red-600" />
            <img src="/bkash-logo.png" alt="bKash" className="h-8" />
            <span>bKash Payment Gateway</span>
          </div>
          <p>Pay with bKash PGW.</p>
          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Pay With BKash
          </button>
        </div>
      </div>
    </div>
  );
}