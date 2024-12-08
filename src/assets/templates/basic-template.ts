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
          "initialValue":""
        },
        {
          "title":"물건 현황",
          "templateType":"MultiText",
          "initialValue":""
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
          "initialValue":""
        },
        {
          "title":"시세 정보",
          "templateType":"MultiText",
          "initialValue":""
        },
        {
          "title":"최근 5년 내 최저가/ 최고가",
          "templateType":"MultiText",
          "initialValue":""
        }
      ]
    },
    {
      "categoryTitle":"3. 호재 / 악재",
      "components":[
        {
          "title":"호재 정보",
          "templateType":"MultiText",
          "initialValue":""
        },
        {
          "title":"악재 정보",
          "templateType":"MultiText",
          "initialValue":""
        }
      ]
    },
    {
      "categoryTitle":"4. 기타 메모",
      "components":[
        {
          "title":"메모 1",
          "templateType":"MultiText",
          "initialValue":""
        },
        {
          "title":"메모 2",
          "templateType":"MultiText",
          "initialValue":""
        },
        {
          "title":"메모 3",
          "templateType":"MultiText",
          "initialValue":""
        }
      ]
    }
  ]
} as const