import { useBookStore } from '../../../stores/books'

export function BookList() {
  const books = useBookStore((state) => state.books)
  const removeBook = useBookStore((state) => state.removeBook)

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          {book.title}
          <button onClick={() => removeBook(book.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
} 