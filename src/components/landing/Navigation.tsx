import { Link } from 'react-router-dom'
import { Button } from "../../components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">SpotLog</Link>
          <div className="flex space-x-4">
            {/* 모바일용 버튼 */}
            <Button asChild size="sm" className="md:hidden">
              <Link to="/templates">임장 템플릿 보러가기</Link>
            </Button>
            {/* 데스크톱용 버튼 */}
            <Button asChild className="hidden md:flex">
              <Link to="/templates">임장 템플릿 보러가기</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}