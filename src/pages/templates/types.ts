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