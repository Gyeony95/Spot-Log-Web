import { cn } from '../../../lib/utils'
import { TemplateComponent } from '../types'
import { commercialTemplate } from '../../../assets/templates/commercial-template'
import { basicTemplate } from '../../../assets/templates/basic-template'
import { livingTemplate } from '../../../assets/templates/living-template'

type TemplatePreviewProps = {
  component: TemplateComponent
}

function TemplatePreview({ component }: TemplatePreviewProps) {
  return (
    <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors group h-full">
      <h4 className="text-gray-100 font-medium mb-3 flex items-center justify-between">
        <span className="truncate mr-3">{component.title}</span>
        <div className="flex-shrink-0 px-2 py-0.5 text-xs bg-gray-700/50 text-gray-400 rounded">
          {component.templateType === 'MultiText' ? '텍스트' : '평점'}
        </div>
      </h4>
      {component.templateType === 'MultiText' ? (
        <div className="relative h-full">
          <div className="w-full min-h-[120px] bg-gray-900/50 rounded-lg border border-gray-700/50 p-4">
            <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">
              {component.initialValue || '내용을 입력해주세요.'}
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <span className="text-sm text-gray-400">클릭하여 입력</span>
          </div>
        </div>
      ) : (
        <div className="mt-2">
          <div className="flex items-center justify-between max-w-[300px] mx-auto">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110",
                  score === component.initialValue
                    ? "border-blue-500 bg-blue-500/20 text-blue-400"
                    : "border-gray-700/50 text-gray-500 hover:border-gray-600/50 hover:text-gray-400"
                )}
              >
                {score}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-3 px-1 text-xs text-gray-500 max-w-[300px] mx-auto">
            <span>매우 ���쁨</span>
            <span>매우 좋음</span>
          </div>
        </div>
      )}
    </div>
  )
}

type TemplateContentProps = {
  selectedTemplateId: string | null
}

export function TemplateContent({ selectedTemplateId }: TemplateContentProps) {
  const getTemplateData = () => {
    switch (selectedTemplateId) {
      case 'commercial':
        return commercialTemplate
      case 'basic':
        return basicTemplate
      case 'living':
        return livingTemplate
      default:
        return null
    }
  }

  const templateData = getTemplateData()

  if (!templateData) {
    return (
      <div className="mt-16 md:mt-0 md:ml-72 min-h-screen flex items-center justify-center">
        <p className="text-gray-400">템플릿을 선택해주세요.</p>
      </div>
    )
  }

  return (
    <div className="mt-16 md:mt-0 md:ml-72 min-h-screen bg-gray-900/50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8">
        {/* 헤더 섹션 */}
        <div className="mb-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-100 mb-4">
            {templateData.templateTitle}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {templateData.templateContent}
          </p>
        </div>

        {/* 템플릿 구조 */}
        <div className="space-y-12">
          {templateData.template.map((category, index) => (
            <div key={index} className="bg-gray-800/20 rounded-2xl p-6 md:p-8">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-medium mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-medium text-gray-100">
                  {category.categoryTitle}
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.components.map((component, compIndex) => (
                  <TemplatePreview
                    key={compIndex}
                    component={component}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 