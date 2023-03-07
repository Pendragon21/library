import React, { useState } from "react";
import { IBookFormProps, Book } from "../interfaces";

const BookForm: React.FC<IBookFormProps> = ({
  setShowForm,
  addBookHandler,
}) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const validateFields = () => {
    if (!name || !author || !year) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateFields()) {
      return alert("Please fill in all fields");
    }
    const newBook = new Book(name, author, parseInt(year));
    addBookHandler(newBook);
    setName("");
    setAuthor("");
    setYear("");
    setShowForm(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="book name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            name="author"
            placeholder="book author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="number"
            name="year"
            placeholder="book year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </label>
        <br />
        <button type="submit">Add Book</button>
        <button type="button" onClick={() => setShowForm(false)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookForm;
