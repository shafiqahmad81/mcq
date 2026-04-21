import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5 md:py-10">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
        <div>
          <h3 className="text-2xl font-bold text-pink-400 mb-2 sm:mb-3">MCQ Master</h3>
          <p className="text-sm text-white leading-6">
            বাংলাদেশের চাকরি, ভর্তি ও একাডেমিক প্রস্তুতির জন্য স্মার্ট MCQ প্ল্যাটফর্ম।
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-blue-500">
            Categories
          </h4>

          <div className="space-y-2 text-sm flex flex-col">

            <Link href="category" className="inline-flex w-fit">
              <span className="text-sm hover:text-blue-400 transition cursor-pointer">
                প্রিলি প্রস্তুতি
              </span>
            </Link>

            <Link href="category" className="inline-flex w-fit">
              <span className="text-sm hover:text-blue-400 transition cursor-pointer">
                ব্যাংক নিয়োগ
              </span>
            </Link>

            <Link href="category" className="inline-flex w-fit">
              <span className="text-sm hover:text-blue-400 transition cursor-pointer">
                মডেল টেস্ট
              </span>
            </Link>

            <Link href="category" className="inline-flex w-fit">
              <span className="text-sm sm:text-base hover:text-blue-400 transition cursor-pointer">
                জব সার্কুলার
              </span>
            </Link>

          </div>
        </div>


        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-blue-500">
            Pages
          </h4>

          <div className="space-y-2 flex flex-col">

            <Link href="/faq" className="inline-flex w-fit">
              <span className="text-sm hover:text-blue-400 transition cursor-pointer">
                FAQ
              </span>
            </Link>

            <Link href="/terms" className="inline-flex w-fit">
              <span className="text-sm hover:text-blue-400 transition cursor-pointer">
                Terms & conditions
              </span>
            </Link>

          </div>
        </div>


        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-blue-500">Contact</h4>
          <div className="space-y-2 text-sm text-gray-300 flex flex-col">
            <p>Email: <Link className="text-blue-500 hover:underline" href="mailto:support@mcqmaster.com">support@mcqmaster.com </Link></p>
            <p>Phone: <Link className="text-blue-500 hover:underline" href="tel:+880 1234-567890">+880 1234-567890</Link></p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 mt-5">
        <p className=" text-sm sm:text-base text-white">Copyright © 2026 MCQ All Rights Reserved. Development by <span className="text-pink-500 text-base sm:text-lg">Dreamlabit</span></p>
      </div>
    </footer>
  );
}