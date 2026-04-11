"use client";
import { useState } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
  image: string;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "মডেল টেস্ট প্যাকেজ ১",
      price: 30,
      qty: 1,
      image: "https://via.placeholder.com/60x60",
    },
    {
      id: 2,
      title: "English Grammar Model Test Course",
      price: 20,
      qty: 1,
      image: "https://via.placeholder.com/60x60",
    },
  ]);

  // Remove item
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Increase quantity
  const increaseQty = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wide">
            <tr>
              <th className="min-w-42 text-left p-3 sm:p-4">Product ({cartItems.length})</th>
              <th className="text-center p-3 sm:p-4">Price</th>
              <th className="text-center p-3 sm:p-4">Quantity</th>
              <th className="text-center p-3 sm:p-4">Total</th>
              <th className="p-3 sm:p-4"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t border-gray-300">
                <td className="p-3 sm:p-4"><span className="font-medium text-gray-800">{item.title}</span></td>
                <td className="text-center p-3 sm:p-4">৳{item.price.toFixed(2)}</td>
                <td className="p-3 sm:p-4">
                  <div className="flex justify-center">
                    <div className="border border-gray-300 flex items-center rounded overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td className="text-center p-3 sm:p-4 text-red-500 font-medium">
                  ৳{(item.price * item.qty).toFixed(2)}
                </td>
                <td
                  onClick={() => removeItem(item.id)}
                  className="text-center p-3 sm:p-4 text-red-500 cursor-pointer text-lg hover:text-red-700 transition"
                >
                  ×
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-5 mt-6">
        <form className="flex flex-col flex-wrap gap-4">
          <input
            type="text"
            placeholder="Coupon code"
            className="w-full py-2 sm:py-3 border border-gray-300 rounded-md px-3 sm:px-4 outline-none focus:border-emerald-500"
          />
          <button type="submit" className="bg-pink-500 hover:bg-pink-600 transition-all text-white px-6 py-3 rounded-md font-medium cursor-pointer">
            Apply Coupon
          </button>
        </form>

        <div className="w-full sm:max-w-sm ml-auto">
          <h2 className="text-2xl font-semibold mb-4">Cart totals</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex justify-between p-4 border-b">
              <span>Subtotal</span>
              <span>৳{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between p-4 bg-gray-50 font-semibold">
              <span>Total</span>
              <span className="text-red-500">৳{subtotal.toFixed(2)}</span>
            </div>
          </div>

          <form action="">
            <button type="submit" className="w-full mt-4 bg-pink-500 hover:bg-pink-600 transition-all text-white py-4 rounded-lg font-semibold text-lg cursor-pointer">
                Proceed to Checkout
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}