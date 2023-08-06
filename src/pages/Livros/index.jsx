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
    <div>
      <h1>Lista de livros</h1>
      <ul>
        {book.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};
