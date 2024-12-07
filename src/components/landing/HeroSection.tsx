import { Button } from "../../components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="w-full px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          특별한 순간을<br/>기록하세요
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          SpotLog와 함께 당신의 소중한 순간들을 아름답게 기록하고 공유하세요.
          위치 기반의 특별한 경험을 만들어보세요.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">시작하기</Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#features">더 알아보기</a>
          </Button>
        </div>
      </div>
    </section>
  )
} 