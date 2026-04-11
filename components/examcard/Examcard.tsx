import Link from "next/link"

interface ExamCardProps {
  title: string
  marks: number
  duration: number
  buttonText?: string
}

export default function ExamCard({
  title,
  marks,
  duration,
  buttonText = "Start Exam",
}: ExamCardProps) {
  return (
    <div className="bg-white shadow-xl rounded-md overflow-hidden">
     
      <div className="text-center py-4 border-b bg-gray-50 text-gray-600 font-medium">
        পরীক্ষার সময় {duration} মিনিট
      </div>

      <div className="py-16 text-center space-y-4">
        <h2 className="text-xl font-semibold">
          {title} | {marks} নম্বর
        </h2>

        <p className="text-gray-500">
          {title} | {marks} নম্বর
        </p>

        <Link href={"exam"} className="mt-4 bg-pink-500 hover:bg-pink-600 transition-all px-8 py-2 sm:py-3 text-white rounded-md font-semibold shadow">
          {buttonText}
        </Link>
      </div>
    </div>
  )
}