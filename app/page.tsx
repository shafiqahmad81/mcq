import Image from "next/image";
import Link from "next/link";
import Image1 from "../assets/image/image1.jpg"
import CourseCard from "@/components/course/CourseCard";
import Header from "../components/header/header";
import Footer from "@/components/footer/Footer";
import Card from "@/components/category/Card";

const categories = [
  "প্রিলি প্রস্তুতি",
  "ব্যাংক নিয়োগ",
  "বিসিএস"
];

const courses = [
  { title: "React Basics", price: "$49", image: Image1, link: "/payment" },
  { title: "Next.js Advanced", price: "$69", image: Image1, link: "/payment" },
  { title: "Javascript Advanced", price: "$50", image: Image1, link: "/payment" },
];

export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="bg-white text-black">
        {/* Hero */}
        <section className="container py-10">
          <div className="rounded-3xl bg-linear-to-r from-blue-50 to-pink-50 p-5 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h1>
                দেশের সর্ববৃহৎ <span className="text-blue-600">চাকরি প্রস্তুতি</span> প্ল্যাটফর্ম
              </h1>
              <p className="mt-4 text-gray-600">
                বিষয়ভিত্তিক MCQ, মডেল টেস্ট, প্রিমিয়াম কোর্স এবং জব প্রিপারেশন এক জায়গায়।
              </p>
              <Link
                href="/mcq"
                className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 transition-all text-white px-8 py-3 rounded-2xl"
              >
                Start Practice
              </Link>
            </div>
            <div className="w-full max-w-md py-10 md:py-20 rounded-3xl bg-blue-100 flex items-center justify-center">
              <span className="text-6xl">📘</span>
            </div>
          </div>
        </section>

        {/* Category sections */}
        <section className="container py-10 space-y-10">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-center border-b-4 border-green-600 pb-2 mb-6">
                {cat}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card
                    title="বাংলা"
                    description="বাংলাদেশের ইতিহাস হাজার বছরের সমৃদ্ধ ঐতিহ্যে ভরা..."
                    href="/model-test"
                  />
                  <Card
                    title="English"
                    description="বাংলাদেশের ইতিহাস হাজার বছরের সমৃদ্ধ ঐতিহ্যে ভরা..."
                    href="/model-test"
                  />
                  <Card
                    title="গণিত"
                    description="বাংলাদেশের ইতিহাস হাজার বছরের সমৃদ্ধ ঐতিহ্যে ভরা..."
                    href="/model-test"
                  />
                  <Card
                    title="সাধারণ জ্ঞান"
                    description="বাংলাদেশের ইতিহাস হাজার বছরের সমৃদ্ধ ঐতিহ্যে ভরা..."
                    href="/model-test"
                  />
              </div>
            </div>
          ))}
        </section>
        {/* Featured courses */}
        <section className="container py-8">
          <h2 className="text-2xl font-bold border-b-4 border-green-600 inline-block mb-6">
            Preparation Model Test
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <CourseCard
                key={i}
                title={course.title}
                price={course.price}
                imageSrc={course.image}
                purchaseLink={course.link}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
