// import { Button } from "../../components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="w-full px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
        쉽고 체계적인 임장앱<br/>이젠 스팟로그로 기록하세요.
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          대한민국 1등 임장 어플 스팟로그, 아직까지 엑셀과 메모장을 들고 임장을 다니시나요?
        </p>
        <div className="flex justify-center space-x-4">
          {/* <Button size="lg">시작하기</Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#features">더 알아보기</a>
          </Button> */}
        </div>
      </div>
    </section>
  )
} 