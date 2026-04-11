import Link from "next/link";
import { BookOpen } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  href: string;
};
export default function Card({ title, description, href }: CardProps) {
  return (
    <Link href={href}>
      <div className=" cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-start gap-4">
          
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
            <BookOpen size={28} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900">
              {title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {description}
            </p>
          </div>

        </div>
      </div>
    </Link>
  );
}