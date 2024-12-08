import { Link } from 'react-router-dom'
import { Button } from "../../components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">SpotLog</Link>
          <div className="hidden md:flex space-x-8">
            <Button asChild>
              <Link to="/templates">템플릿 보러가기</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}