import { TemplateStructure } from '../../pages/templates/types'

export const livingTemplate: TemplateStructure = {
  templateTitle: "주거지 분석 보고서",
  templateContent: "주거지 분석 보고서는 거주를 고려 중인 지역의 주변 환경, 생활 편의시설, 교통 상황 등을 체계적으로 정리하여 최적의 선택을 돕는 템플릿입니다.",
  template: [
    {
      categoryTitle: "1. 기본 정보",
      components: [
        {
          title: "지역명",
          templateType: "MultiText",
          initialValue: "예시) 서울시 마포구 연남동"
        },
        {
          title: "주소",
          templateType: "MultiText",
          initialValue: "예시) 서울시 마포구 동교로 38길 일대"
        },
        {
          title: "평점",
          templateType: "Radio",
          initialValue: 1
        }
      ]
    },
    {
      categoryTitle: "2. 주변 환경",
      components: [
        {
          title: "치안 상태",
          templateType: "MultiText",
          initialValue: "예시) CCTV 10개소, 파출소 도보 10분 거리"
        },
        {
          title: "소음 정도",
          templateType: "MultiText",
          initialValue: "예시) 주택가 이면도로, 차량 통행 적음"
        },
        {
          title: "공원 및 녹지 접근성",
          templateType: "MultiText",
          initialValue: "예시) 경의선숲길 도보 5분, 연남동공원 도보 10분"
        }
      ]
    }
  ]
} as const