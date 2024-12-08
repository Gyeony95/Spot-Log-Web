import { TemplateStructure } from '../../pages/templates/types'

export const livingTemplate: TemplateStructure ={
  "templateTitle": "주거지 분석 보고서",
  "templateContent": "주거지 분석 보고서는 거주를 고려 중인 지역의 주변 환경, 생활 편의시설, 교통 상황 등을 체계적으로 정리하여 최적의 선택을 돕는 템플릿입니다.",
  "template": [
    {
      "categoryTitle": "1. 기본 정보",
      "components": [
        {
          "title": "지역명",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "주소",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "평점",
          "templateType": "Radio",
          "initialValue": 1
        }
      ]
    },
    {
      "categoryTitle": "2. 주변 환경",
      "components": [
        {
          "title": "치안 상태",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "소음 정도",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "공원 및 녹지 접근성",
          "templateType": "MultiText",
          "initialValue": ""
        }
      ]
    },
    {
      "categoryTitle": "3. 생활 편의시설",
      "components": [
        {
          "title": "교육 기관 (학교, 학원 등)",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "병원 및 약국 접근성",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "쇼핑 및 식당 옵션",
          "templateType": "MultiText",
          "initialValue": ""
        }
      ]
    },
    {
      "categoryTitle": "4. 교통 상황",
      "components": [
        {
          "title": "대중교통 접근성",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "출퇴근 소요 시간",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "주차 시설",
          "templateType": "MultiText",
          "initialValue": ""
        }
      ]
    },
    {
      "categoryTitle": "5. 기타 메모",
      "components": [
        {
          "title": "메모 1",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "메모 2",
          "templateType": "MultiText",
          "initialValue": ""
        },
        {
          "title": "메모 3",
          "templateType": "MultiText",
          "initialValue": ""
        }
      ]
    }
  ]
} as const