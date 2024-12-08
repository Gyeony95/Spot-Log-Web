export type Template = {
  id: string
  title: string
  description: string
}

export type Category = {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  templates: Template[]
}

export type TemplateComponent = {
  title: string
  templateType: 'MultiText' | 'Radio'
  initialValue: string | number
}

export type TemplateCategory = {
  categoryTitle: string
  components: TemplateComponent[]
}

export type TemplateStructure = {
  templateTitle: string
  templateContent: string
  template: TemplateCategory[]
} 