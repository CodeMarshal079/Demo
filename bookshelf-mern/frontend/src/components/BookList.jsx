import BookItem from "./BookItem";

export default function BookList({ books, onRead, onDelete }) {
  if (books.length === 0) {
    return <p className="text-center text-gray-500">No books yet. Add one!</p>;
  }
  return (
    <ul className="space-y-2">
      {books.map((book) => (
        <BookItem key={book.id} book={book} onRead={onRead} onDelete={onDelete} />
      ))}
    </ul>
  );
}
