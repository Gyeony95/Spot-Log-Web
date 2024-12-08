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
          "initialValue":"예시) 다세대주택 2층, 전용면적 59.5㎡, 방2 화장실1"
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
          "initialValue":"예시) 감정가 3억 5천만원 (2023년 12월 기준)"
        },
        {
          "title":"시세 정보",
          "templateType":"MultiText",
          "initialValue":"예시) 실거래가 3억 8천만원 ~ 4억 2천만원 선, 호가 4억 5천만원"
        },
        {
          "title":"최근 5년 내 최저가/ 최고가",
          "templateType":"MultiText",
          "initialValue":"예시) 최저 2억 8천만원 (2019년) / 최고 4억 2천만원 (2023년)"
        }
      ]
    },
    {
      "categoryTitle":"3. 호재 / 악재",
      "components":[
        {
          "title":"호재 정보",
          "templateType":"MultiText",
          "initialValue":"예시) 1. 2025년 경의선 지하화 예정\n2. 인근 홍대입구역 복합환승센터 개발\n3. 연남동 도시재생사업 진행 중"
        },
        {
          "title":"악재 정보",
          "templateType":"MultiText",
          "initialValue":"예시) 1. 주변 재건축 공사로 인한 소음\n2. 주차 공간 부족\n3. 일부 건물 노후화"
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