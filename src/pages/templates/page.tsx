import { TemplateHeader } from './components/TemplateHeader'
import { TemplateSidebar } from './components/TemplateSidebar'
import { TemplateContent } from './components/TemplateContent'
import { useState, useEffect } from 'react'
import { templateData } from './data/templateData'
import { useSearchParams } from 'react-router-dom'

export default function TemplatesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const templateId = searchParams.get('template') || 'basic'
  const categoryId = searchParams.get('category') || 'residential'

  const [activeCategory, setActiveCategory] = useState<string | null>(categoryId)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(templateId)

  // URL 업데이트 함수
  const updateURL = (template: string | null, category: string | null) => {
    const params = new URLSearchParams(searchParams)
    if (template) params.set('template', template)
    if (category) params.set('category', category)
    setSearchParams(params)
  }

  // 카테고리 변경 핸들러
  const handleCategoryChange = (id: string | null) => {
    setActiveCategory(id)
    updateURL(selectedTemplateId, id)
  }

  // 템플릿 변경 핸들러
  const handleTemplateChange = (id: string | null) => {
    setSelectedTemplateId(id)
    updateURL(id, activeCategory)
  }

  // URL 파라미터가 변경될 때 상태 업데이트
  useEffect(() => {
    setSelectedTemplateId(templateId)
    setActiveCategory(categoryId)
  }, [templateId, categoryId])

  return (
    <div className="min-h-screen bg-gray-900">
      <TemplateHeader setIsSidebarOpen={setIsSidebarOpen} />
      <div className="relative">
        <TemplateSidebar
          categories={templateData}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          selectedTemplateId={selectedTemplateId}
          setSelectedTemplateId={handleTemplateChange}
        />
        <TemplateContent selectedTemplateId={selectedTemplateId} />
      </div>
    </div>
  )
} 