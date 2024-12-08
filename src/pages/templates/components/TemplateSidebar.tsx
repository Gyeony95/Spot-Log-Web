import { ChevronDown, X } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Category } from '../types'
import spotLogLogo from '../../../assets/spot_log_logo.png'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

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
          "absolute inset-0 bg-black/50 transition-opacity md:hidden outline-none",
          isSidebarOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      {/* Sidebar */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out outline-none",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:relative md:pointer-events-auto"
        )}
      >
        <div className="p-4">
          {/* Logo - Home navigation */}
          <div className="mb-4">
            <button onClick={() => navigate('/')} className="w-full flex justify-center items-center mb-4 bg-gray-700/50">
              <img src={spotLogLogo} alt="스팟로그 로고" className="h-12" />
              <p className="ml-4 text-gray-100 text-lg flex items-center">스팟로그</p>
            </button>
          </div>

          {/* Close button - mobile only */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h2 className="text-xl font-bold text-gray-100">템플릿</h2>
            <button
              className="p-2 text-gray-400 hover:text-gray-100 outline-none focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Desktop title */}
          <h2 className="text-xl font-bold text-gray-100 mb-4 hidden md:block">템플릿</h2>
          
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="outline-none">
                <button
                  className={cn(
                    "w-full flex items-center justify-between p-2 rounded-lg",
                    "text-gray-400 bg-gray-800/50 hover:text-gray-100 transition-colors",
                    "outline-none focus:outline-none",
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
                    "overflow-hidden transition-all duration-200 ease-in-out outline-none",
                    activeCategory === category.id ? "max-h-40" : "max-h-0"
                  )}
                >
                  {category.templates.map((template) => (
                    <button
                      key={template.id}
                      className={cn(
                        "w-full text-left pl-9 pr-2 py-2",
                        "text-gray-400 bg-gray-800/50 hover:text-gray-100 hover:bg-gray-700/50",
                        "rounded-lg transition-colors outline-none focus:outline-none",
                        selectedTemplateId === template.id && "bg-gray-600 text-gray-100"
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