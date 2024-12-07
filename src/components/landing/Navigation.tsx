import { Button } from "../../components/ui/button"

export function Navigation() {
  const handleTemplateClick = () => {
    alert("준비중인 기능입니다.")
  }

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">SpotLog</div>
          <div className="hidden md:flex space-x-8">
            <Button onClick={handleTemplateClick}>
              템플릿 보러가기
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}