import { TemplateHeader } from './components/TemplateHeader'
import { TemplateSidebar } from './components/TemplateSidebar'
import { TemplateContent } from './components/TemplateContent'
import { useState } from 'react'
import { templateData } from './data/templateData'

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900">
      <TemplateHeader setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex">
        <TemplateSidebar
          categories={templateData}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <TemplateContent />
      </div>
    </div>
  )
} 