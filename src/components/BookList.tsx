import React, { useState } from "react";
import BookForm from "./BookForm";
import { IBook } from "../interfaces";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  const addBookHandler = (newBook: IBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      {showForm ? (
        <BookForm addBookHandler={addBookHandler} setShowForm={setShowForm} />
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Book List</h1>
          <button onClick={() => setShowForm(true)}>Add Book</button>
          {books.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {books.map((book, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                    margin: "10px",
                    width: "calc(33.33% - 20px)",
                    minWidth: "300px",
                  }}
                >
                  <h3 style={{ margin: "0" }}>{book.name}</h3>
                  <p style={{ margin: "5px 0" }}>by {book.author}</p>
                  <p style={{ margin: "5px 0" }}>Year: {book.year}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No books added yet</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookList;
