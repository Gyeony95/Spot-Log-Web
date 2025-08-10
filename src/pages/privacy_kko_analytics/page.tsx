export default function PrivacyKakaoAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-gray-100">
        <h1 className="text-3xl font-bold mb-8">개인정보 처리방침</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제1조(목적)</h2>
          <p className="text-gray-300">
            카톡분석기(이하 '회사')는 회사가 제공하는 카카오톡 대화 분석 서비스(이하 '서비스')를 이용하는 개인(이하 '이용자')의 개인정보를 보호하기 위해 개인정보보호법, 정보통신망법 등 관련 법령을 준수하며, 이용자의 개인정보 보호와 고충 처리를 위해 다음과 같은 개인정보 처리방침(이하 '본 방침')을 수립합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제2조(개인정보 처리의 원칙)</h2>
          <p className="text-gray-300">
            회사는 이용자의 개인정보를 수집하지 않습니다. 카톡분석기는 사용자가 업로드한 텍스트 파일을 기기 내에서만 분석하며, 모든 분석 결과는 사용자의 디바이스에 저장됩니다. 개발자는 업로드된 내용이나 분석 결과에 대해 알 수 없습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제3조(본 방침의 공개)</h2>
          <ol className="list-decimal pl-5 text-gray-300 space-y-2">
            <li>회사는 이용자가 언제든지 본 방침을 쉽게 확인할 수 있도록 회사 홈페이지 또는 앱 내에서 본 방침을 공개합니다.</li>
            <li>회사는 본 방침을 공개할 때 글자 크기와 색상을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제4조(본 방침의 변경)</h2>
          <ol className="list-decimal pl-5 text-gray-300 space-y-2">
            <li>본 방침은 개인정보 관련 법령, 지침, 고시 또는 회사 정책 변경에 따라 개정될 수 있습니다.</li>
            <li>회사는 본 방침을 개정하는 경우, 앱 스토어 업데이트 내역 또는 회사 홈페이지를 통해 공지합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제5조(외부 API 사용)</h2>
          <p className="text-gray-300">
            회사는 대화 내용 분석을 위해 OpenAI GPT API를 사용합니다. 이 경우 분석을 위한 텍스트 데이터만이 암호화되어 전송되며, 개인 식별이 가능한 정보는 제외됩니다. OpenAI의 데이터 처리 정책에 따라 해당 데이터는 30일 후 자동 삭제됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제6조(데이터 처리 방식)</h2>
          <p className="text-gray-300">
            카톡분석기 앱의 데이터 처리 방식은 다음과 같습니다:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2 mt-4">
            <li>파일 업로드: 사용자 디바이스 내에서만 처리되며 서버에 저장되지 않음</li>
            <li>통계 생성: 로컬 디바이스에서 계산되어 개발자가 접근할 수 없음</li>
            <li>분석 결과: 사용자 디바이스의 로컬 스토리지에만 저장</li>
            <li>GPT API 통신: 분석을 위한 텍스트만 전송되며 개인정보 제외</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제7조(개인정보 보호 책임자 지정)</h2>
          <p className="text-gray-300 mb-4">회사는 개인정보 보호와 관련한 문의사항을 처리하기 위해 다음과 같은 개인정보 보호 책임자를 지정하고 있습니다.</p>
          <div className="text-gray-300">
            <p className="font-semibold mb-2">개인정보 보호 책임자</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>이름: 권기현</li>
              <li>직책: 대표</li>
              <li>이메일: rlgus1133@gmail.com</li>
            </ul>
          </div>
        </section>

        <section>
          <p className="text-gray-300 italic">본 방침은 2025년 08월 10일부터 시행됩니다.</p>
        </section>
      </div>
    </div>
  )
}
