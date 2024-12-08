import { Menu } from 'lucide-react'

type TemplateHeaderProps = {
  setIsSidebarOpen: (isOpen: boolean) => void
}

export function TemplateHeader({ setIsSidebarOpen }: TemplateHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-gray-900 border-b border-gray-800 z-40 md:hidden">
      <div className="h-full px-4 flex items-center">
        <button
          className="p-2 text-gray-400 hover:text-gray-100 bg-gray-800/50 rounded-lg transition-colors"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="ml-4 text-lg font-bold text-gray-100">템플릿</h1>
      </div>
    </header>
  )
} 