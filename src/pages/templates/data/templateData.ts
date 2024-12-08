import { Home, Store } from 'lucide-react'
import { Category } from '../types'

export const templateData: Category[] = [
  {
    id: 'residential',
    icon: Home,
    title: '주택',
    templates: [
      {
        id: 'basic',
        title: '기본 임장 보고서',
        description: ''
      },
      {
        id: 'living',
        title: '주거지 분석 보고서',
        description: ''
      }
    ]
  },
  {
    id: 'commercial',
    icon: Store,
    title: '상가',
    templates: [
      {
        id: 'commercial',
        title: '상업용 부동산 분석 보고서',
        description: ''
      }
    ]
  }
] 