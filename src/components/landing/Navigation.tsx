import { Button } from "../../components/ui/button"

export function Navigation() {
  return (
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
  )
}