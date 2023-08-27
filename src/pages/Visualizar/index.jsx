import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Visualizar = () => {
  const [book, setBook] = useState([]);
  const { id: routeId } = useParams();

  useEffect(() => {
    const visuBook = async () => {
      try {
        await axios
          .get(`http://127.0.0.1:8000/api/books/${routeId}`)
          .then((response) => {
            console.log(response);
            setBook(response.data)
          });
      } catch (error) {
        console.log(error.response);
      }
    };
    visuBook();
  }, []);

  return (
    <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="d-flex flex-column align-items-center justify-content-center text-center">
        <img src={book.image} className="card-img-top" alt="Capa do Livro" style={{ maxWidth: "100%", width: "400px" }}/>
        <div className="mb-3">
          <h5 className="mb-3 display-6">{book.title}</h5>
          <p className="card-text">Autor: {book.author}</p>
          <p className="card-text">Editora: {book.publisher}</p>
        </div>
      </div>
    </div>
  );
};
