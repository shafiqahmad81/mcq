export default function CartPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">Premium MCQ Packages</h2>
      <div className="border rounded-2xl p-6 flex justify-between">
        <div>
          <h3 className="font-semibold">BCS Full Model Test</h3>
          <p>100 Sets Included</p>
        </div>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-xl">Buy Now</button>
      </div>
    </div>
  );
}