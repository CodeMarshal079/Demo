export default function BookItem({ book, onRead, onDelete }) {
  const isRead = book.status === "read";

  return (
    <li className="flex flex-col gap-2 rounded border p-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className={`font-semibold ${isRead ? "text-gray-400 line-through" : ""}`}>
          {book.title}
        </p>
        <p className="text-sm text-gray-500">by {book.author}</p>
        {isRead && (
          <span className="mt-1 inline-block rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">
            ✓ Read
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {!isRead && (
          <button
            onClick={() => onRead(book.id)}
            className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
          >
            Mark read
          </button>
        )}
        <button
          onClick={() => onDelete(book.id)}
          className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
