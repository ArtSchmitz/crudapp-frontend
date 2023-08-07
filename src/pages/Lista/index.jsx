import React, { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = () => {
      axios
        .get("http://127.0.0.1:8000/api/books")
        .then((response) => {
          console.log(response.data);
          setBook(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBook();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-3 display-4">Lista de livros</h1>
      <ul className="list-group">
        {book.map((book) => (
          <li key={book.id} className="list-group-item fs-5">
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};