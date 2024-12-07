import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { MapPin, Camera, Share2 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* 네비게이션 */}
      <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">SpotLog</div>
            <div className="hidden md:flex space-x-8">
              <Button variant="ghost" asChild>
                <a href="#features">기능</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#how-it-works">사용방법</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#download">다운로드</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
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

      {/* 주요 기능 섹션 */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            주요 기능
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">위치 기반 ��록</h3>
                <p className="text-muted-foreground">
                  당신이 방문한 모든 특별한 장소를 자동으로 기록하고 관리하세요.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">사진 및 메모</h3>
                <p className="text-muted-foreground">
                  각 장소에 대한 사진과 메모를 추가하여 더욱 풍부한 기록을 남기세요.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Share2 className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">공유하기</h3>
                <p className="text-muted-foreground">
                  친구들과 당신의 특별한 순간을 쉽게 공유하고 소통하세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 다운로드 섹션 */}
      <section id="download" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            App Store와 Google Play에서 SpotLog를 만나보세요.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg" className="gap-2">
              <AppleIcon className="w-5 h-5" />
              App Store
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <GooglePlayIcon className="w-5 h-5" />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 bg-muted">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 SpotLog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.88 3.51-.84 1.54.07 2.7.61 3.47 1.66-3.2 1.87-2.69 6.05.55 7.35-.53 1.53-1.25 3.06-2.61 4.02zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
)

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.184l2.71-2.712 4.267 2.463a.998.998 0 0 1 0 1.732l-4.267 2.463-2.71-2.712 2.71-2.711z"/>
  </svg>
) 