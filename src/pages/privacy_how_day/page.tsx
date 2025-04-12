export default function PrivacyHowDayPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-gray-100">
        <h1 className="text-3xl font-bold mb-8">개인정보 처리방침</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제1조(목적)</h2>
          <p className="text-gray-300">
            하우데이(이하 '회사')는 회사가 제공하는 서비스(이하 '서비스')를 이용하는 개인(이하 '이용자')의 개인정보를 보호하기 위해 개인정보보호법, 정보통신망법 등 관련 법령을 준수하며, 이용자의 개인정보 보호와 고충 처리를 위해 다음과 같은 개인정보 처리방침(이하 '본 방침')을 수립합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제2조(개인정보 처리의 원칙)</h2>
          <p className="text-gray-300">
            회사는 이용자의 개인정보를 수집하지 않습니다. 하우데이 앱은 오늘이 한 해의 얼마나 지났는지를 홈화면 위젯으로 보여주는 단순한 기능만을 제공하며, 이를 위해 어떠한 개인정보도 필요로 하지 않습니다.
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
          <h2 className="text-xl font-semibold mb-4">제5조(수집하는 개인정보 항목)</h2>
          <p className="text-gray-300">
            회사는 서비스 제공을 위해 어떠한 개인정보도 수집하지 않습니다. 하우데이 앱은 로그인이 필요 없으며, 오직 기기의 날짜 정보만을 활용하여 서비스를 제공합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">제6조(개인정보 보호 책임자 지정)</h2>
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
          <p className="text-gray-300 italic">본 방침은 2024년 12월 8일부터 시행됩니다.</p>
        </section>
      </div>
    </div>
  )
}