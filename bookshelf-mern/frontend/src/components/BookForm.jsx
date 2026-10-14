import { useState } from "react";

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onAdd(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2 sm:flex-row">
      <input
        className="flex-1 rounded border px-3 py-2"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="flex-1 rounded border px-3 py-2"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}
