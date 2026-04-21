import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type CardProps = {
  title: string;
  description: string;
  href: string;
  image: StaticImageData | string;
};

export default function Card({
  title,
  description,
  href,
  image,
}: CardProps) {
  return (
    <Link href={href}>
      <div className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-start gap-4">
          
          <div className="relative w-12 p-2 rounded-xl bg-indigo-100 overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

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