import { ChevronDown, X } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Category } from '../types'

type TemplateSidebarProps = {
  categories: Category[]
  activeCategory: string | null
  setActiveCategory: (id: string | null) => void
  isSidebarOpen: boolean
  setIsSidebarOpen: (isOpen: boolean) => void
  selectedTemplateId: string | null
  setSelectedTemplateId: (id: string | null) => void
}

export function TemplateSidebar({
  categories,
  activeCategory,
  setActiveCategory,
  isSidebarOpen,
  setIsSidebarOpen,
  selectedTemplateId,
  setSelectedTemplateId
}: TemplateSidebarProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:z-40",
        isSidebarOpen ? "" : "md:pointer-events-auto pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity md:hidden",
          isSidebarOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      {/* Sidebar */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-64 bg-gray-700 transform transition-transform duration-200 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:relative md:pointer-events-auto"
        )}
      >
        <div className="p-4">
          {/* Close button - mobile only */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h2 className="text-xl font-bold text-gray-100">템플릿</h2>
            <button
              className="p-2 text-gray-400 hover:text-gray-100"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Desktop title */}
          <h2 className="text-xl font-bold text-gray-100 mb-4 hidden md:block">템플릿</h2>
          
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  className={cn(
                    "w-full flex items-center justify-between p-2 rounded-lg",
                    "text-gray-400 bg-gray-800/50 hover:text-gray-100 transition-colors",
                    activeCategory === category.id && "bg-gray-800 text-gray-100"
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
                      className={cn(
                        "w-full text-left pl-9 pr-2 py-2 text-gray-400 bg-gray-800/50 hover:text-gray-100 hover:bg-gray-700/50 rounded-lg transition-colors",
                        selectedTemplateId === template.id && "bg-gray-700 text-gray-100"
                      )}
                      onClick={() => setSelectedTemplateId(template.id)}
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
    </div>
  )
} 