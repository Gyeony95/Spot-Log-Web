import { TemplateStructure } from '../../pages/templates/types'

export const commercialTemplate: TemplateStructure = {
    "templateTitle": "상업용 부동산 분석 보고서",
    "templateContent": "상업용 부동산 분석 보고서는 투자 또는 임대를 고려 중인 상업용 부동산의 입지, 수익성, 주변 환경을 체계적으로 평가하여 최적의 의사결정을 돕는 템플릿입니다.",
    "template": [
      {
        "categoryTitle": "1. 기본 정보",
        "components": [
          {
            "title": "상호명 / 부동산 이름",
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
        "categoryTitle": "2. 입지 조건",
        "components": [
          {
            "title": "주요 고객층",
            "templateType": "MultiText",
            "initialValue": ""
          },
          {
            "title": "유동 인구",
            "templateType": "MultiText",
            "initialValue": ""
          },
          {
            "title": "근처 경쟁 상권",
            "templateType": "MultiText",
            "initialValue": ""
          }
        ]
      },
      {
        "categoryTitle": "3. 수익성 분석",
        "components": [
          {
            "title": "임대료",
            "templateType": "MultiText",
            "initialValue": ""
          },
          {
            "title": "월 예상 수익",
            "templateType": "MultiText",
            "initialValue": ""
          },
          {
            "title": "운영비용",
            "templateType": "MultiText",
            "initialValue": ""
          }
        ]
      },
      {
        "categoryTitle": "4. 주변 환경",
        "components": [
          {
            "title": "교통 접근성",
            "templateType": "MultiText",
            "initialValue": ""
          },
          {
            "title": "근처 편의시설",
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