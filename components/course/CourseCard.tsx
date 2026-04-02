"use client";

import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  price: string;
  imageSrc: string | import("next/image").StaticImageData;
  alt?: string;
  purchaseLink?: string; // dynamic link
}

export default function CourseCard({
  title,
  price,
  imageSrc,
  alt = "Course Image",
  purchaseLink = "#",
}: CourseCardProps) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <div className="w-full bg-gray-100">
        <Image
          src={imageSrc}
          alt={alt}
          width={277}
          height={156}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold mb-3">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-600">{price}</span>
          <Link href={purchaseLink} className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
}