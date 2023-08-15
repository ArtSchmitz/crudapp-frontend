import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Icons, Button } from "./styles.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Lista = () => {
  const [book, setBook] = useState([]);
  const [deletedBook, setDeletedBook] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getBook = () => {
      axios
        .get("http://127.0.0.1:8000/api/books")
        .then((response) => {
          console.log(response.data);
          setBook(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBook();

    if (deletedBook !== null) {
      setDeletedBook(null);
    }
  }, [deletedBook]);

  const deleteProduct = (id) => {
    axios
      .delete('http://127.0.0.1:8000/api/book/'+id)
      .then((response) => {
        console.log(response.data);
        setMessage("Livro deletado com sucesso");
        setDeletedBook(id);
      })
  }

  useEffect(() => {
    let timer;
    if (message) {
      timer = setTimeout(() => {
        setMessage("");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="container mt-4">
      <h1 className="mb-3 display-4">Lista de livros</h1>
      {message && (
          <div className="alert alert-success mb-3" role="alert">
            {message}
          </div>
        )}
      <ul className="list-group">
        {book.map((book) => (
          <Container>
            <li key={book.id} className="list-group-item fs-5">
              {book.title} - {book.author} - {book.publisher}
              <Icons>
                <Link to={`/atualizar/${book.id}`}>
                  <img src="icons/pencil.png" alt="Editar" width={30} />
                </Link>
                <Button onClick={() => deleteProduct(book.id)}>
                  <img src="icons/delete.png" alt="Editar" width={30} />
                </Button>
              </Icons>
            </li>
          </Container>
        ))}
      </ul>
    </div>
  );
};
