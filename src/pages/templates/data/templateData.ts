import { Home, Store } from 'lucide-react'
import { Category } from '../types'

export const templateData: Category[] = [
  {
    id: 'residential',
    icon: Home,
    title: '주택',
    templates: [
      {
        id: 'house',
        title: '단독주택',
        description: '단독주택 임장 시 필요한 체크리스트입니다.'
      },
      {
        id: 'apartment',
        title: '아파트',
        description: '아파트 임장 시 필요한 체크리스트입니다.'
      }
    ]
  },
  {
    id: 'commercial',
    icon: Store,
    title: '상가',
    templates: [
      {
        id: 'retail',
        title: '상가건물',
        description: '상가건물 임장 시 필요한 체크리스트입니다.'
      },
      {
        id: 'office',
        title: '사무실',
        description: '사무실 임장 시 필요한 체크리스트입니다.'
      }
    ]
  }
] 