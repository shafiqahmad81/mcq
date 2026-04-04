import ResultCard from "../../components/result/ResultCard"

export default function ResultPage() {
  return (
    <section className="py-8 md:py-16 bg-gray-100">
      
      <ResultCard
        totalQuestions={20}
        correct={15}
        wrong={5}
        score={75}
      />

    </section>
  )
}