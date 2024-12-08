import { ChevronDown } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Category } from '../types'

type TemplateSidebarProps = {
  categories: Category[]
  activeCategory: string | null
  setActiveCategory: (id: string | null) => void
  isSidebarOpen: boolean
  setIsSidebarOpen: (isOpen: boolean) => void
}

export function TemplateSidebar({
  categories,
  activeCategory,
  setActiveCategory,
  isSidebarOpen,
  setIsSidebarOpen
}: TemplateSidebarProps) {
  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 p-2 rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-400 hover:text-gray-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out z-40",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-100 mb-4">템플릿</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  className={cn(
                    "w-full flex items-center justify-between p-2 rounded-lg",
                    "text-gray-400 bg-gray-600/50 hover:text-gray-100 transition-colors",
                    activeCategory === category.id && "bg-gray-700 text-gray-100"
                  )}
                  onClick={() => setActiveCategory(
                    activeCategory === category.id ? null : category.id
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <category.icon className="w-5 h-5" />
                    <span>{category.title}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeCategory === category.id && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200 ease-in-out",
                    activeCategory === category.id ? "max-h-40" : "max-h-0"
                  )}
                >
                  {category.templates.map((template) => (
                    <button
                      key={template.id}
                      className="w-full text-left pl-9 pr-2 py-2 text-gray-400 bg-gray-600/50 hover:text-gray-100 hover:bg-gray-700/50 rounded-lg transition-colors"
                      onClick={() => {
                        alert("준비중인 기능입니다.")
                      }}
                    >
                      {template.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 