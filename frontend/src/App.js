import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./constants";

const App = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", year: "" });
  const [editingBook, setEditingBook] = useState(null);
  console.log(`log API URL here: ${API_URL}`)
  console.log(`env url here: ${process.env.REACT_APP_BACKEND_URL}`)

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    setBooks(response.data);
  };

  const handleAddBook = async () => {
    await axios.post(`${API_URL}/books`, form);
    fetchBooks();
    setForm({ title: "", author: "", year: "" });
  };

  const handleEditBook = async () => {
    await axios.put(`${API_URL}/books/${editingBook._id}`, form);
    fetchBooks();
    setEditingBook(null);
    setForm({ title: "", author: "", year: "" });
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`${API_URL}/books/${id}`);
    fetchBooks();
  };

  return (
    <div>
      <h1>Book Management</h1>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Author"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <input
        placeholder="Year"
        type="number"
        value={form.year}
        onChange={(e) => setForm({ ...form, year: e.target.value })}
      />
      <button onClick={editingBook ? handleEditBook : handleAddBook}>
        {editingBook ? "Edit Book" : "Add Book"}
      </button>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} ({book.year}){" "}
            <button onClick={() => setEditingBook(book)}>Edit</button>
            <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
