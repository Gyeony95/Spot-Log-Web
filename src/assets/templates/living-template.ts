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
          "initialValue": "예시) 서울시 마포구 연남동"
        },
        {
          "title": "주소",
          "templateType": "MultiText",
          "initialValue": "예시) 서울시 마포구 동교로 38길 일대"
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
          "initialValue": "예시) CCTV 10개소, 파출소 도보 10분 거리, 골목길 가로등 설치 완료, 여성안심귀갓길 지정"
        },
        {
          "title": "소음 정도",
          "templateType": "MultiText",
          "initialValue": "예시) 주택가 이면도로, 차량 통행 적음, 인근 공사 현장 없음, 심야 소음 거의 없음"
        },
        {
          "title": "공원 및 녹지 접근성",
          "templateType": "MultiText",
          "initialValue": "예시) 경의선숲길 도보 5분, 연남동공원 도보 10분, 홍제천 산책로 도보 15분, 주변 가로수 잘 정비됨"
        }
      ]
    },
    {
      "categoryTitle": "3. 생활 편의시설",
      "components": [
        {
          "title": "교육 기관 (학교, 학원 등)",
          "templateType": "MultiText",
          "initialValue": "예시) 홍익대학교 도보 15분, 서울예술고 도보 10분, 학원가 밀집 지역 도보 5분, 어린이집 3곳 인근 위치"
        },
        {
          "title": "병원 및 약국 접근성",
          "templateType": "MultiText",
          "initialValue": "예시) 연남동 365의원 도보 3분, 24시간 약국 도보 5분, 세브란스병원 차량 15분, 소아과 도보 10분"
        },
        {
          "title": "쇼핑 및 식당 옵션",
          "templateType": "MultiText",
          "initialValue": "예시) 홍대입구역 상권 도보 10분, 연남동 맛집거리 도보 5분, 하나로마트 도보 3분, 편의점 2곳 인근"
        }
      ]
    },
    {
      "categoryTitle": "4. 교통 상황",
      "components": [
        {
          "title": "대중교통 접근성",
          "templateType": "MultiText",
          "initialValue": "예시) 지하철 2호선/공항철도 홍대입구역 도보 8분, 마포08/7011 버스정류장 도보 3분, 심야버스 N26 운행"
        },
        {
          "title": "출퇴근 소요 시간",
          "templateType": "MultiText",
          "initialValue": "예시) 강남역까지 지하철 25분, 여의도까지 버스 30분, 광화문까지 지하철 20분, 공항철도 직통 이용 가능"
        },
        {
          "title": "주차 시설",
          "templateType": "MultiText",
          "initialValue": "예시) 거주자 우선주차 신청 가능, 공영주차장 도보 5분, 월 15만원, 기계식 주차장 보유"
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