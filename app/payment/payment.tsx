"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function PaymentPage() {
const [orderItems, setOrderItems] = useState([
  { name: "মডেল টেস্ট প্যাকেজ", price: 30 },
]);

const removeItem = (indexToRemove: number) => {
  setOrderItems((prev) =>
    prev.filter((_, index) => index !== indexToRemove)
  );
};

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="min-h-screen bg-[#f5f5f5] py-5 sm:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {/* Left Form */}
          <div className="bg-white p-3 sm:p-6 md:p-8 rounded-2xl shadow-sm">
            <h2 className=" mb-5 sm:mb-8">Billing details</h2>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block font-medium mb-1 sm:mb-2">Full Name *</label>
                <input
                  type="text"
                  className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 sm:mb-2">Phone *</label>
                <input
                  type="text"
                  className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 sm:mb-2">Email address *</label>
                <input
                  type="email"
                  className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
                />
              </div>

              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" />
                <span>Create an account?</span>
              </label>
            </div>

            <div className="mt-6 md:mt-12">
              <h3 className="mb-3 sm:mb-6">Additional information</h3>
              <label className="block font-medium mb-1 sm:mb-2">
                Order notes <span className="text-gray-500">(optional)</span>
              </label>
              <textarea
                rows={8}
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Right Summary */}
          <div className="space-y-4 sm:space-y-8">
            <div className="bg-white p-3 sm:p-6 md:p-8 rounded-2xl shadow-sm">
              <h2 className="mb-5 sm:mb-8 text-center">Your Order</h2>

              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-50 font-medium text-sm uppercase tracking-wide">
                  <div className="col-span-2 p-2 sm:p-4">Product</div>
                  <div className="p-2 sm:p-4">Subtotal</div>
                </div>

                {orderItems.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 border-t text-sm items-center relative"
                  >
                    {/* Product Name */}
                    <div className="col-span-2 p-2 sm:p-4">
                      {item.name} × 1
                    </div>

                    {/* Price */}
                    <div className="p-2 sm:p-4">
                      ৳{item.price.toFixed(2)}
                    </div>

                    {/* Remove Icon */}
                    <div className="flex justify-center absolute top-1/2 right-2 sm:right-4 -translate-y-1/2">
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-500 hover:text-red-700 transition cursor-pointer"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ))} 

                <div className="grid grid-cols-3 border-t font-medium">
                  <div className="col-span-2 p-2 sm:p-4">Subtotal</div>
                  <div className="p-4">৳{subtotal.toFixed(2)}</div>
                </div>

                <div className="grid grid-cols-3 border-t font-bold">
                  <div className="col-span-2 p-2 sm:p-4">Total</div>
                  <div className="p-4 text-red-500">৳{subtotal.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-6 md:p-8 rounded-2xl shadow-sm">
              <h2 className="mb-5 sm:mb-8 text-center">Payment</h2>

              <div className="border rounded-xl p-3 sm:p-5">
                <label className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <input type="radio" defaultChecked name="payment" />
                    <span className="text-base sm:text-lg">bKash Payment Gateway</span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-pink-600">bKash</span>
                </label>
                <p className="text-sm sm:text-base text-gray-500 mt-4">Pay with bKash PGW.</p>
              </div>

              <p className="text-sm text-gray-600 mt-6 leading-7">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>

              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 sm:py-4 rounded-xl mt-5 sm:mt-8 text-lg font-semibold transition cursor-pointer">
                Pay With bKash
              </button>
              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 sm:py-4 rounded-xl mt-5 sm:mt-8 text-lg font-semibold transition cursor-pointer">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
