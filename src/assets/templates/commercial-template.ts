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
            "initialValue": "예시) 강남 SK허브 빌딩, 테헤란로 프라임 타워"
          },
          {
            "title": "주소",
            "templateType": "MultiText",
            "initialValue": "예시) 서울시 강남구 테헤란로 123, 역삼동"
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
            "initialValue": "예시) 20-30대 직장인, IT/스타트업 종사자, 인근 회사원, 주말 가족 단위 방문객"
          },
          {
            "title": "유동 인구",
            "templateType": "MultiText",
            "initialValue": "예시) 평일 점심 시간대 약 500명/시간, 주말 300명/시간, 유동인구 증가 추세, 저녁 시간대 회사원 유입 많음"
          },
          {
            "title": "근처 경쟁 상권",
            "templateType": "MultiText",
            "initialValue": "예시) 반경 500m 내 유사 업종 3개, 차별화 요소 있음, 프랜차이즈 입점 현황 양호"
          }
        ]
      },
      {
        "categoryTitle": "3. 수익성 분석",
        "components": [
          {
            "title": "임대료",
            "templateType": "MultiText",
            "initialValue": "예시) 보증금 5천만원, 월세 350만원 (관리비 포함), 권리금 4천만원, 연 5% 인상률"
          },
          {
            "title": "월 예상 수익",
            "templateType": "MultiText",
            "initialValue": "예시) 월 매출 2,500만원, 순이익 800만원 예상, 배달앱 매출 30% 비중"
          },
          {
            "title": "운영비용",
            "templateType": "MultiText",
            "initialValue": "예시) 인건비 월 500만원, 관리비 80만원, 수도광열비 50만원, 재료비 40% 수준"
          }
        ]
      },
      {
        "categoryTitle": "4. 주변 환경",
        "components": [
          {
            "title": "교통 접근성",
            "templateType": "MultiText",
            "initialValue": "예시) 지하철 2호선 강남역 3번 출구 도보 5분, 버스정류장 도보 1분, 주차장 30대 수용"
          },
          {
            "title": "근처 편의시설",
            "templateType": "MultiText",
            "initialValue": "예시) 은행 3곳, 편의점 2곳, 카페거리, 대형 오피스 빌딩 5개동 인접"
          },
          {
            "title": "주차 시설",
            "templateType": "MultiText",
            "initialValue": "예시) 건물 내 지하주차장, 시간당 3천원, 상가 이용객 2시간 무료, 월정기권 20만원"
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