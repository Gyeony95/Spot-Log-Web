import { TemplateStructure } from '../../pages/templates/types'

export const basicTemplate: TemplateStructure = {
  "templateTitle":"기본 임장 보고서",
  "templateContent":"기본 임장 보고서는 물건 개요, 시세 정보, 호재/악재, 메모를 체계적으로 기록해 임장 데이터를 간편하게 관리하고 분석할 수 있도록 돕는 템플릿입니다.",
  "template":[
    {
      "categoryTitle":"1. 물건 개요",
      "components":[
        {
          "title":"물건지 주소",
          "templateType":"MultiText",
          "initialValue":"예시) 서울시 마포구 연남로 11길 43"
        },
        {
          "title":"물건 현황",
          "templateType":"MultiText",
          "initialValue":"예시) 다세대주택 2층, 전용면적 59.5㎡"
        },
        {
          "title":"전체 평점",
          "templateType":"Radio",
          "initialValue":1
        }
      ]
    },
    {
      "categoryTitle":"2. 감정가 / 시세 정보",
      "components":[
        {
          "title":"감정가",
          "templateType":"MultiText",
          "initialValue":"예시) 감정가 3억 5천만원"
        },
        {
          "title":"시세 정보",
          "templateType":"MultiText",
          "initialValue":"예시) 실거래가 3억 8천만원 ~ 4억 2천만원 선"
        },
        {
          "title":"최근 5년 내 최저가/ 최고가",
          "templateType":"MultiText",
          "initialValue":"예시) 최저 2억 8천만원 (2019년) / 최고 4억 2천만원 (2023년)"
        }
      ]
    }
  ]
} as const