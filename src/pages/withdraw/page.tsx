export default function WithdrawPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-gray-100">
        <h1 className="text-3xl font-bold mb-8">회원 탈퇴 안내</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">회원 탈퇴 방법</h2>
          <p className="text-gray-300">
            SpotLog 앱에서 회원 탈퇴를 원하시는 경우 아래의 절차를 따라주세요.
          </p>
          <ol className="list-decimal pl-5 text-gray-300 space-y-2 mt-4">
            <li>SpotLog 앱에 로그인합니다.</li>
            <li>화면 하단의 '마이 페이지'로 이동합니다.</li>
            <li>'설정' 메뉴를 선택합니다.</li>
            <li>설정 화면 하단의 '회원 탈퇴' 버튼을 클릭하여 탈퇴를 진행합니다.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">유의사항</h2>
          <p className="text-gray-300">
            회원 탈퇴 시 모든 개인정보와 서비스 이용 기록이 삭제되며, 이는 복구할 수 없습니다.
          </p>
        </section>
      </div>
    </div>
  )
}
