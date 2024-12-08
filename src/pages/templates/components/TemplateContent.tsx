import { cn } from '../../../lib/utils'
import { TemplateComponent, TemplateStructure } from '../types'
import { commercialTemplate } from '../../../assets/templates/commercial-template'

type TemplatePreviewProps = {
  component: TemplateComponent
}

function TemplatePreview({ component }: TemplatePreviewProps) {
  return (
    <div className="p-4 bg-gray-800/50 rounded-lg">
      <h4 className="text-gray-100 font-medium mb-2">{component.title}</h4>
      {component.templateType === 'MultiText' ? (
        <div className="w-full h-24 bg-gray-700/50 rounded-lg border border-gray-600/50 p-3">
          <div className="w-2/3 h-4 bg-gray-600/50 rounded animate-pulse" />
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4, 5].map((score) => (
            <div
              key={score}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors",
                score === 1 
                  ? "border-gray-500 bg-gray-700/50 text-gray-100" 
                  : "border-gray-700/50 text-gray-400"
              )}
            >
              {score}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function TemplateContent() {
  const templateData: TemplateStructure = commercialTemplate

  return (
    <div className="mt-16 md:mt-0 md:ml-72 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-100 mb-4">
            {templateData.templateTitle}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {templateData.templateContent}
          </p>
        </div>

        {/* 템플릿 구조 */}
        <div className="space-y-8">
          {templateData.template.map((category, index) => (
            <div key={index} className="bg-gray-800/30 rounded-xl p-6">
              <h2 className="text-xl font-medium text-gray-100 mb-6">
                {category.categoryTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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