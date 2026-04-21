import Card from "./Card";
import Image1 from "../../assets/image/image1.jpg";

export default function Page() {

  return (
    <section className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="">
          প্রিলি প্রস্তুতি MCQ
        </h1>
        <p className="text-gray-500 mt-2">
          প্রিলি প্রস্তুতি MCQ practice শুরু করুন
        </p>
      </div>

      {/* বাংলা MCQ Sets */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        <Card
          title="বাংলা"
          description="বাংলাদেশের ইতিহাস হাজার বছরের সমৃদ্ধ ঐতিহ্যে ভরা..."
          href="/model-test"
          image={Image1}
        />
        <Card
          title="English"
          description="বাংলাদেশের ইতিহাস হাজার বছরের সমৃদ্ধ ঐতিহ্যে ভরা..."
          href="/model-test"
          image={Image1}
        />
        <Card
          title="গণিত"
          description="বাংলাদেশের ইতিহাস হাজার বছরের সমৃদ্ধ ঐতিহ্যে ভরা..."
          href="/model-test"
          image={Image1}
        />
        <Card
          title="সাধারণ জ্ঞান"
          description="বাংলাদেশের ইতিহাস হাজার বছরের সমৃদ্ধ ঐতিহ্যে ভরা..."
          href="/model-test"
          image={Image1}
        />
      </div>
    </section>
  );
}