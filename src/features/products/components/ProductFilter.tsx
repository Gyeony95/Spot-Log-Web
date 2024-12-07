export function ProductFilter() {
  return (
    <div className="mb-4">
      <select className="border p-2 rounded">
        <option value="">모든 카테고리</option>
        <option value="electronics">전자제품</option>
        <option value="clothing">의류</option>
        <option value="books">도서</option>
      </select>
      <input 
        type="text" 
        placeholder="검색어를 입력하세요" 
        className="border p-2 rounded ml-2"
      />
    </div>
  )
} 